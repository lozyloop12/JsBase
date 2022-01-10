import { Translator } from "../constants";
import en from '../assets/i18n/en.json'
import fr from '../assets/i18n/fr.json'

export const i18n = Translator.setup({
  resources: {
    en: {
      translation: en
    },
    fr: {
      translation: fr
    },
  },
  lng: 'fr',
  fallbackLng: 'fr',
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  nsSeparator: false,
  keySeparator: false,
})
