import truncate from './truncate'
import currency from './currency'
import date from './date'
import deepKey from './deepKey'
import translate from './translate'
import enums from './enums'
import tModel from './tModel'
import mask, * as masks from '../lib/mask'

const filters = {
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
    for (let f in Object.assign(filters, masks)) {
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
