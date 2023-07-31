import i18n from 'i18next'
import enLanguage from '../locales/en/translation.json'
import viLanguage from '../locales/vi/translation'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  // init data
  resources: {
    en: {
      translation: enLanguage,
    },
    vi: {
      translation: viLanguage,
    },
  },
  lng: 'vi', // if you're using a language detector, do not define the lng option
  fallbackLng: 'vi',
  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
})

export default i18n
