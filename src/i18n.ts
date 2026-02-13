import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import commonBn from "./locales/en/common.json";
import authEn from "./locales/en/auth.json";
import commonAr from "./locales/ar/common.json";
import authAr from "./locales/ar/auth.json";

export const defaultNS = "common";
export const resources = {
  en: {
    common: commonBn,
    auth: authEn,
  },
  ar: {
    common: commonAr,
    auth: authAr,
  },
} as const;

i18next.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  ns: ["common", "auth"],
  defaultNS,
  interpolation: { escapeValue: false },
});

export default i18next;
