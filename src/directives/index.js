import translate from './translate'
import tModel from './tModel'
import deepKey from './deepKey'
import blank from './blank'
import BackgroundImage from './BackgroundImage'
import TextBind from './TextBind'

const directives = {
  translate,
  tModel,
  deepKey,
  blank,
  BackgroundImage,
  TextBind
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
  blank,
  BackgroundImage,
  TextBind
}
