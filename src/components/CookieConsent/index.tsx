import { useEffect } from 'react';
import * as CookieConsent from 'vanilla-cookieconsent';
import pluginConfig from './config';
import 'vanilla-cookieconsent/dist/cookieconsent.css';
const CookieConsentComponent = () => {
  useEffect(() => {
    CookieConsent.run(pluginConfig);
  }, []);

  return (
    <a href="#" onClick={CookieConsent.showPreferences}>
      Show Cookie Preferences
    </a>
  );
};

export default CookieConsentComponent;
