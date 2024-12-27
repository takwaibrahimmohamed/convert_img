import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import dataEn from "../public/local/Us/translation.json"
import dataPt from "../public/local/BR/translation.json"
import dataEs from "../public/local/ES/translation.json"
const resources = {
  US: {
    translation: dataEn
  },
  BR: {
    translation: dataPt
  },
  ES: {
    translation: dataEs
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "BR", 
    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;