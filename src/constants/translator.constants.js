import I18n from 'i18next'
import { initReactI18next } from 'react-i18next'

export class Translator {
  static setup(options) {
    I18n.use(initReactI18next).init(options)

    return I18n
  }

  static translate(message) {
    return I18n.t(message) || message
  }

  static changeLanguages = (lng) => {
    I18n.changeLanguage(lng)
  }
}
