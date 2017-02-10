import translate from './translate'
import tModel from './tModel'
import deepKey from './deepKey'
import blank from './blank'

const directives = {
  translate,
  tModel,
  deepKey,
  blank
}
export default {
  install (Vue) {
    for (let k in directives) {
      Vue.directive(k, directives[k])
    }
  }
}

export {
  translate,
  tModel,
  deepKey,
  blank
}
