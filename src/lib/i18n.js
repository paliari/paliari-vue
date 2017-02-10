import {deepKey} from './utils'

const locale = {}

function setLocale (locales) {
  for (let k in locales) {
    locale[k] = locales[k]
  }
}

export default {
  setLocale,
  hum (key, replaces) {
    return this.replace(deepKey(locale, key), replaces)
  },
  replace (message, replaces) {
    if (!message || !replaces) {
      return message
    }
    for (let k in replaces) {
      message = message.replace(new RegExp('%{'+k+'}', 'g'), '"'+replaces[k]+'"')
    }
    return message
  }
}

export {
  setLocale,
  locale
}
