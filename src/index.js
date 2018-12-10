require('./polyfill')
import _components, * as components from './components'
import _filters, * as filters from './filters'
import _directives, * as directives from './directives'
import { Fecha } from './lib'

import { StoreHelpers, StorePlugins } from './store/index'

import VuexMapper from './mixins/VuexMapper'

export default {
  install(Vue, options = {}) {
    Vue.use(_components)
    Vue.use(_filters, options)
    Vue.use(_directives)
    if (options.Vuex) {
      Vue.use(VuexMapper, options.Vuex)
    }
  }
}

export { components, filters, directives, Fecha, StoreHelpers, StorePlugins }
