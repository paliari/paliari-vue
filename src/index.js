import components from './components/index'
import filters from './filters/index'
import directives from './directives/index'
import { setLocale } from './lib/i18n'

import VuexMapper from './lib/VuexMapper'

export default {
  install (Vue, options) {
    if (options.locales) {
      setLocale(options.locales)
    }
    Vue.use(components)
    Vue.use(filters)
    Vue.use(directives)
    if (options.vuex) {
      Vue.use(VuexMapper, options.vuex)
    }
  }
}
