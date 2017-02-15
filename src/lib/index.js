import i18n from './i18n'
import {deepKey, isDate, isRegExp, ucfirst, deepClone} from './utils'
import * as masks from './mask'
import dialogs from './dialogs'

export default {
  install (vue) {
    vue.prototype.$util = {
      i18n,
      masks,
      isDate,
      deepKey,
      deepClone,
      ucfirst
    }
    vue.prototype.$dialogs = dialogs
  }
}

export {
  i18n,
  masks,
  isDate,
  isRegExp,
  deepKey,
  deepClone,
  ucfirst
}
