/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useState, useEffect, useRef } from "react"
import { Search, X } from "lucide-react"
import { Input } from "./input"
import { Button } from "./button"
import {motion, AnimatePresence} from 'framer-motion'
import { cn } from "../../lib/utils"
import { useSearch } from '../../hooks/use-search';
import type {SearchResult} from "../../hooks/use-search"
interface SearchDrawerProps {
  currentLang?: string
  isOpen: boolean
  onClose: () => void
  blogUrl: string,
  webUrl:string
}


interface SearchInputProps {
  currentLang?: string
  className?: string,
  blogUrl: string,
  webUrl:string
  onExpanded?: (v: boolean) => void
}

export function SearchInput({ currentLang = "en", className, blogUrl, webUrl, onExpanded }: SearchInputProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

    const {
    query,
    setQuery,
    results,
    isLoading,
    isOpen,
    setIsOpen,
    clearSearch: hookClearSearch,
    handleResultClick,
  } = useSearch({ currentLang, blogUrl, webUrl })

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        if (!query.trim()) {
          onExpanded && onExpanded(false)
          setIsExpanded(false)
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [query])

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isExpanded])


  const clearSearch = () => {
    setQuery("")
    setIsOpen(false)
    onExpanded && onExpanded(false)
    hookClearSearch()
    setIsExpanded(false)
  }

  const handleSearchClick = () => {
    onExpanded && onExpanded(true)
    setIsExpanded(true)
  }

  return (
    <div ref={searchRef} className={cn("relative", className)}>
      <div className={cn("relative", isExpanded ? 'w-full' : 'w-[24px]')}>
        <motion.div
          animate={{
            opacity: isExpanded ? 0 : 1,
            scale: isExpanded ? 0 : 1,
            pointerEvents: isExpanded ? "none" : "auto",
            transition: {delay: isExpanded ? 0 : 0.5}
          }}
          initial={{ opacity: 0, x: 0 }}
          className="absolute inset-0 "
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={handleSearchClick}
            className="h-9 w-9 hover:bg-accent hover:text-[#8220ff] text-white transition-colors"
          >
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
        </motion.div>

        <motion.div
          animate={{
            scaleX: isExpanded ? 1 : 0,
            opacity: isExpanded ? 1 : 0,
            pointerEvents: isExpanded ? "auto" : "none",
            transition: {delay: isExpanded ? 0.5 : 0}
          }}
          initial={{ opacity: 0, x: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: isExpanded ? 0.5 : 0,
            scaleX: { duration: 0.25 },
            opacity: { duration: 0.2 },
          }}
          className="origin-right"
        >
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white" />
          <Input
            ref={inputRef}
            type="text"
            placeholder="Search pages..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-64 pl-10 pr-10 border-2 focus:border-[#8220ff] text-white focus:ring-[#8220ff]/20 transition-all duration-200"
          />
          <Button
            variant="ghost"
            size="sm"
            onClick={clearSearch}
            className="absolute right-1 top-1/2 h-7 w-7 -translate-y-1/2 p-0 text-white"
          >
            <X className="h-3 w-3" />
          </Button>
        </motion.div>
      </div>

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -10, scaleY: 0.8 }}
          animate={{
            opacity: isOpen && isExpanded ? 1 : 0,
            y: isOpen && isExpanded ? 0 : 1,
            scaleY: isOpen && isExpanded ? 1 : 0,
          }}
          exit={{ opacity: 0, y: -10, scaleY: 0.8 }}
          className="absolute top-full w-[200%] max-w-[90vw] right-0 z-50 mt-2 max-h-96 overflow-y-auto rounded-lg border bg-popover shadow-lg origin-top"
          style={{ pointerEvents: isOpen && isExpanded ? "auto" : "none" }}
        >
          {isLoading ? (
            <div className="p-4 text-center text-sm text-muted-foreground">Searching...</div>
          ) : results.length > 0 ? (
            <div className="p-2 w-full">
              <ResultList results={results} onClick={handleResultClick}/>
            </div>
          ) : (
            <div className="p-4 text-center text-sm text-muted-foreground">No results found</div>
          )}
          </motion.div>
      </AnimatePresence>
    </div>
  )
}


export function SearchDrawer({ currentLang = "en", onClose, blogUrl, webUrl }: SearchDrawerProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const { query, setQuery, results, isLoading, clearSearch, handleResultClick } = useSearch({ currentLang, blogUrl, webUrl })


  const handleClose = () => {
    clearSearch()
    onClose()
  }

  return (
    <div className="z-50 bg-background/80 backdrop-blur-sm">
      <div className=" z-50 h-full bg-background ">
        <div className="flex items-center gap-4 p-4 border-b">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              ref={inputRef}
              type="text"
              placeholder="Search pages..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 border-2 focus:border-[#8220ff] focus:ring-[#8220ff]/20 transition-all duration-200"
            />
          </div>
          {results.length > 0 && (
            <Button variant="ghost" size="icon" onClick={handleClose}>
              <X className="h-4 w-4" />
            </Button>
          )}

        </div>

        <div className="p-4 max-h-[calc(100vh-80px)] overflow-y-auto">
          {isLoading ? (
            <div className="text-center text-sm text-muted-foreground py-8">Searching...</div>
          ) : results.length > 0 ? (
            <div className="space-y-2">
              <ResultList results={results} onClick={handleResultClick}/>
            </div>
          ) : query.trim().length >= 2 ? (
            <div className="text-center text-sm text-muted-foreground py-8">No results found</div>
          ) : (
            <div className="text-center text-sm text-muted-foreground py-8">Start typing to search...</div>
          )}
        </div>
      </div>
    </div>
  )
}

export function ResultList ({results, onClick} : {results: SearchResult[], onClick: (result:SearchResult) => void}) {
  return (
                <>
              {results.map((result, index) => (
               <button
                  key={`${result.path}-${index}`}
                  onClick={() => onClick(result)}
                  className="w-full text-left p-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors group"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm line-clamp-1 group-hover:text-[#8220ff]">{result.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{result.description}</p>
                      {result.keywords && result.keywords.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {result.keywords.slice(0, 3).map((keyword, idx) => (
                            <span
                              key={idx}
                              className="inline-block px-2 py-1 text-xs bg-[#8220ff]/60 text-white rounded-full"
                            >
                              {keyword}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col p-2 items-center justify-start gap-2">
                    {result.lang && (
                      <span className="text-xs text-muted-foreground uppercase font-mono">{result.lang}</span>
                    )}
                    {result.type && (<span className={cn("text-xs rounded-sm p-1 uppercase font-mono", result.type === 'page' ? 'bg-[#8220ff]/60 text-white ' : 'text-[#8220ff]/80 bg-gray-200')}>{result.type}</span>)}
                    </div>
                    
                  </div>
                </button>
              ))}
            </>
  )
}