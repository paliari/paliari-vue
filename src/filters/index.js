import truncate from './truncate'
import currency from './currency'
import date from './date'
import deepKey from './deepKey'
import translate from './translate'
import enums from './enums'
import tModel from './tModel'
import mask, * as masks from '../lib/mask'

const filters = {
  ...masks,
  mask,
  truncate,
  currency,
  date,
  deepKey,
  translate,
  enums,
  tModel
}

export default {
  install (Vue) {
    for (let f in filters) {
      Vue.filter(f, filters[f])
    }
  }
}

export {
  mask,
  masks,
  truncate,
  currency,
  date,
  deepKey,
  translate,
  enums,
  tModel
}
