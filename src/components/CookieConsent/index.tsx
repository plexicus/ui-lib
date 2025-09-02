import { useEffect } from 'react';
import * as CookieConsent from 'vanilla-cookieconsent';
import pluginConfig from './config';
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import './styles.css'
const CookieConsentComponent = ({webUrl, lang} : {webUrl:string, lang:string}) => {
  useEffect(() => {
    CookieConsent.run(pluginConfig({webUrl, lang}));
  }, []);

  return (
    <a className='underline hover:text-gray-700 cursor-pointer' onClick={CookieConsent.showPreferences}>
      Show Cookie Preferences
    </a>
  );
};

export default CookieConsentComponent;
