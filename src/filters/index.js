import truncate from './truncate'
import currency from './currency'
import date from './date'

const filters = { truncate, currency, date }

export default {
  install(Vue) {
    for (let f in filters) {
      Vue.filter(f, filters[f])
    }
  }
}

export { truncate, currency, date }
