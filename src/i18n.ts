import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import dictionaries from "./assets/locales";

export const supportedLngs = Object.keys(dictionaries);
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