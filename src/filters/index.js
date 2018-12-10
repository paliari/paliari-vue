import truncate from './truncate'
import currency from './currency'
import date from './date'

export default {
  install(Vue, options = {}) {
    Vue.filter('truncate', truncate)
    Vue.filter('currency', currency)
    Vue.filter('date', date(options.Fecha))
  }
}

export { truncate, currency, date }
