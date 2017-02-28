require('./polyfill/index.js')
import _components, * as components from './components/index'
import _filters, * as filters from './filters/index'
import _directives, * as directives from './directives/index'
import { setLocale } from './lib/i18n'
import _lib, * as util from './lib/index'

import StoreHelpers from './store/index'

import VuexMapper from './mixins/VuexMapper'

import { Auth, TokenManager, CookieManager } from './lib/auth'

export default {
  install (Vue, options = {}) {
    if (options.locales) {
      setLocale(options.locales)
    }
    Vue.use(_components)
    Vue.use(_filters)
    Vue.use(_directives)
    Vue.use(_lib)
    if (options.Vuex) {
      Vue.use(VuexMapper, options.Vuex)
    }
  }
}

export {
  components,
  filters,
  directives,
  util,
  StoreHelpers,
  Auth,
  TokenManager,
  CookieManager
}
