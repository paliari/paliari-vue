import BackgroundImage from './BackgroundImage'
import TextBind from './TextBind'

const directives = {
  BackgroundImage,
  TextBind
}

export default {
  install(Vue) {
    for (let k in directives) {
      Vue.directive(k, directives[k])
    }
  }
}

export { BackgroundImage, TextBind }
