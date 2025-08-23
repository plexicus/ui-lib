import * as React from "react"
import type { SearchInputProps } from './ui/search-input';
import {
  Search,
} from "lucide-react"
import { cn } from "../lib/utils";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandLoading,
} from "./ui/command"
import { useTranslation } from "react-i18next"
import "../i18n"
import { useSearch, type SearchResult } from "../hooks/use-search";
import Link from "./ui/link";
export function CommandDialogSearch({currentLang = "en", className, blogUrl, webUrl,}: SearchInputProps) {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

    const { t } = useTranslation()
      const {
      query,
      setQuery,
      results,
      isLoading,
      handleResultClick
    } = useSearch({ currentLang, blogUrl, webUrl })

    const CommandResult = ({data} : {data: SearchResult[]}) => (
      <CommandGroup>
          {                
            data.map((result) => (
              <Link href={result.path}>              
                <CommandItem onSelect={() => handleResultClick(result)} key={result.title} className="w-full text-left p-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors group">
                  <div className="flex items-start justify-between gap-2 w-full">
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
                </CommandItem>
              </Link>
            ))
          }
      </CommandGroup>
    )

  return (
    <>
      <div className={cn("ui-lib", className)}>
        <CommandDialog open={open} onOpenChange={setOpen} className="top-60 dark" >
          <CommandInput placeholder={t('search.placeholder')} value={query} onValueChange={(e) => setQuery(e)} />
          <CommandList>
            
            {isLoading ? <CommandLoading>Hang on…</CommandLoading> : results.length ? <CommandResult data={results} /> : <CommandEmpty>{t('search.not_found')}</CommandEmpty>}
          </CommandList>
        </CommandDialog>
      </div>
    </>
  )
}

export const SearchButton = () => {
    // This function simulates the ⌘K key press.
  // It creates and dispatches a KeyboardEvent on the document.
  const handleButtonClick = () => {
    // Create a new KeyboardEvent for 'k' key
    // metaKey: true simulates the Command (⌘) key on macOS or Control (Ctrl) on Windows
    const event = new KeyboardEvent('keydown', {
      key: 'k',
      metaKey: true,
      bubbles: true, // Allow the event to bubble up the DOM tree
      cancelable: true,
    });
    // Dispatch the event on the document to simulate a real keypress
    document.dispatchEvent(event);
  };

  return (
      <button
        onClick={handleButtonClick}
        className="flex items-center space-x-2 px-4 py-1 bg-transparent text-gray-200 rounded-xl border border-white/50 hover:bg-violet-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
      >
        {/* Search Icon (Inline SVG) */}
        <Search className="w-4 h-4" />
        {/* Updated to use the <kbd> element for semantic correctness */}
        <kbd className="inline-flex h-5 items-center gap-1 rounded border border-gray-600 bg-violet-800 px-1.5 font-mono text-[10px] font-medium opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>
  )
}