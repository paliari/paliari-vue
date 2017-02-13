import i18n from './i18n'
import {deepKey, ucfirst} from './utils'
import * as masks from './mask'

export default {
  install (Vue) {
    Vue.prototype.$util = {
      i18n,
      masks,
      deepKey,
      ucfirst
    }
  }
}

export {
  i18n,
  masks,
  deepKey,
  ucfirst
}
