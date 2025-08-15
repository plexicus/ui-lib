import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import enTranslation from './assets/locales/en/translations.json'
// import enTranslation from './assets/locales/en/translation.yaml'
// import esTranslation from './assets/locales/es/translation.yaml'
// import itTranslation from './assets/locales/it/translation.yaml'
import dictionaries from "./assets/locales";

export const supportedLngs = Object.keys(dictionaries);

// export const supportedLngs = ["en", "es", "it"]
i18n
  .use(initReactI18next)
  .init({
    lng: "en",
    supportedLngs,
    resources: dictionaries,
    fallbackLng: "en",
    react: { useSuspense: false },
  });

export default i18n;