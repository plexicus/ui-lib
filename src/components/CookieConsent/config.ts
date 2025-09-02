import type { CookieConsentConfig } from 'vanilla-cookieconsent';
import { analytics } from "../../lib/GTM";
import translations from "../../assets/locales/cookie"
const pluginConfig: ({webUrl, lang}: {webUrl: string, lang: string})=> CookieConsentConfig = () => ({
  guiOptions: {
    consentModal: {
      layout: 'box',
      position: 'bottom right',
      equalWeightButtons: true,
      flipButtons: false,
    },
    preferencesModal: {
      layout: 'box',
      position: 'left',
      equalWeightButtons: true,
      flipButtons: false,
    },
  },

  onFirstConsent: function () {
  },

  onConsent: function (param) {
    if(param.cookie.categories.includes('analytics')){
        analytics({}).page()
    }
  },

  categories: {
    necessary: {
      readOnly: true,
      enabled: true,
    },
    analytics: {
      autoClear: {
        cookies: [
          {
            name: /^(_ga|_gid)/,
          },
        ],
      },
    },
  },

  language: {
    default: 'en',
    translations
  },
});

export default pluginConfig;
