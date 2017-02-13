import components from './components/index'
import filters from './filters/index'
import directives from './directives/index'
import { setLocale } from './lib/i18n'
import lib from './lib/index'

import VuexMapper from './lib/VuexMapper'

export default {
  install (Vue, options) {
    if (options.locales) {
      setLocale(options.locales)
    }
    Vue.use(components)
    Vue.use(filters)
    Vue.use(directives)
    Vue.use(lib)
    if (options.Vuex) {
      Vue.use(VuexMapper, options.Vuex)
    }
  }
}

export {
  components,
  filters,
  directives,
  lib
}
