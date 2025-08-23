import { useState, useEffect, useRef } from "react"

export interface SearchResult {
  path: string
  title: string
  description: string
  keywords?: string[]
  lang?: string,
  type: string
}

interface SearchResponse {
  lang: string
  pages: SearchResult[]
}


interface UseSearchOptions {
  currentLang?: string
  debounceMs?: number
  minQueryLength?: number
  className?: string,
  blogUrl: string,
  webUrl:string
}

export function useSearch(options: UseSearchOptions) {
  const { currentLang = "en", debounceMs = 1000, minQueryLength = 2, blogUrl, webUrl } = options

  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const debounceRef = useRef<NodeJS.Timeout>(null)

  useEffect(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
    }

    if (query.trim().length < minQueryLength) {
      setResults([])
      setIsOpen(false)
      return
    }

    debounceRef.current = setTimeout(async () => {
      await performSearch(query.trim())
    }, debounceMs)

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current)
      }
    }
  }, [query, currentLang, debounceMs, minQueryLength])

  const performSearch = async (searchQuery: string) => {
    setIsLoading(true)

    const slashed = currentLang === 'en' ? '' : '/'
    try {
      const allResults: SearchResult[] = []

      const [webResponse, blogResponse] = await Promise.allSettled([
        fetch(`${webUrl}/api/${currentLang}/pages.json?t=${Date.now()}`).then((res) => res.json()) as Promise<SearchResponse>,
        fetch(`${blogUrl}/api/${currentLang}/pages.json?t=${Date.now()}`).then((res) => res.json()) as Promise<SearchResponse>,
      ])

      if (webResponse.status === "fulfilled") {
        const webResults = filterResults(webResponse.value.pages || [], searchQuery)
        allResults.push(...webResults.map((result) => ({ ...result, lang: currentLang, path: (result.path === '/' && currentLang === 'en') ? webUrl : `${webUrl}${slashed}${result.path}`, type: 'page'  })))
      }

      if (blogResponse.status === "fulfilled") {
        const blogResults = filterResults(blogResponse.value.pages || [], searchQuery)
        allResults.push(...blogResults.map((result) => ({ ...result, lang: currentLang, path: `${blogUrl}${slashed}${result.path}`, type: 'blog' })))
      }

      if (allResults.length < 3 && currentLang !== "en") {
        const [webResponseEn, blogResponseEn] = await Promise.allSettled([
          fetch(`${webUrl}/api/en/pages.json?t=${Date.now()}`).then((res) => res.json()),
          fetch(`${blogUrl}/api/en/pages.json?t=${Date.now()}`).then((res) => res.json()),
        ])

        if (webResponseEn.status === "fulfilled") {
          const webResultsEn = filterResults(webResponseEn.value.pages || [], searchQuery)
          allResults.push(...webResultsEn.map((result) => ({ ...result, lang: "en", path: result.path === '/' ? webUrl : `${webUrl}${slashed}${result.path}`, type: 'page' })))
        }

        if (blogResponseEn.status === "fulfilled") {
          const blogResultsEn = filterResults(blogResponseEn.value.pages || [], searchQuery)
          allResults.push(...blogResultsEn.map((result) => ({ ...result, lang: "en", path: `${blogUrl}${slashed}${result.path}`, type: 'blog' })))
        }
      }

      const uniqueResults = allResults
        .filter((result, index, self) => index === self.findIndex((r) => r.path === result.path))
        .slice(0, 8)

      setResults(uniqueResults)
      setIsOpen(uniqueResults.length > 0)
    } catch (error) {
      console.error("Search error:", error)
      setResults([])
      setIsOpen(false)
    } finally {
      setIsLoading(false)
    }
  }

  const filterResults = (pages: SearchResult[], searchQuery: string): SearchResult[] => {
    const query = searchQuery.toLowerCase()

    return pages.filter((page) => {
      const titleMatch = page.title.toLowerCase().includes(query)
      const descriptionMatch = page.description.toLowerCase().includes(query)
      const keywordMatch = page.keywords?.some((keyword) => keyword.toLowerCase().includes(query))

      return titleMatch || descriptionMatch || keywordMatch
    })
  }

  const clearSearch = () => {
    setQuery("")
    setResults([])
    setIsOpen(false)
  }

  const handleResultClick = (result: SearchResult) => {
    window.location.href = `${result.path}`
    setIsOpen(false)
  }

  useEffect(() => {
    performSearch('platform')
  }, [])

  return {
    query,
    setQuery,
    results,
    isLoading,
    isOpen,
    setIsOpen,
    clearSearch,
    handleResultClick,
  }
}
