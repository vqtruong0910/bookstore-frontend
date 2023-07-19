import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import enLanguage from '../locales/en/translation.json'
import viLanguage from '../locales/vi/translation'
import i18next from 'i18next'

// the translations
i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  fallbackLng: 'vi',
  lng: 'vi',
  resources: {
    en: {
      common: enLanguage, // 'common' is our custom namespace
    },
    vi: {
      common: viLanguage,
    },
  },
})

export default i18n
