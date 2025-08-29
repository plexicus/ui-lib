import i18n from "i18next";
import { FooterPlexicus } from "./components/Footer";
import { NavbarPlexicus } from "./components/Navbar";
import { supportedLngs } from "./i18n";
import { analytics } from "./lib/GTM";
import { CommandDialogSearch } from "./components/command-input";
function getLanguageFromUrl(): string {
  const path = window.location.pathname;
  const parts = path.split("/");
  // Assuming the language code is the first segment after the base URL
  const languageCode =  supportedLngs.includes(parts[1]) ? parts[1] : "en"; // Default to 'en' if no code is found
  return languageCode;
}

console.log({a: await analytics({}).page()})
function App() {
  const trackClick = (eventNames: string, scope: string, item: string, value: number) => {
    analytics({}).track(eventNames, {
      scope,
      item,
      value
    })
  }
  const language = getLanguageFromUrl();
  // Set the language for i18next
  i18n.changeLanguage(language);

  return (
    <div className="h-screen bg-black">
      <div className='flex'>
        <NavbarPlexicus lang={language} fullSiteUrl={`http://localhost:8000`} fullBlogUrl={`http://localhost:9000`}/>
      </div>
      <div className="h-screen flex items-center justify-center w-full">
        <CommandDialogSearch currentLang={language} webUrl="http://localhost:8000" blogUrl="http://localhost:9000" />
        <button className="bg-white text-black" onClick={ () => trackClick('test', 'marketing', 'pricing', 1)}>Test GTM track</button>
      </div>
      <div className="mt-24">
        <FooterPlexicus lang={language} fullSiteUrl={`https://plexicus.ai:443`}/>
      </div>
    </div>
  );
}

export default App;
