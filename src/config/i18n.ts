import * as i18nLib from 'i18next'
import ICU from 'i18next-icu'
import { initReactI18next } from 'react-i18next'

import en from 'locale/en.json'

const i18n = i18nLib
  .use(initReactI18next)
  .use(ICU)
  .init({
    resources: {
      en: { translation: en }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  })

export default i18n
