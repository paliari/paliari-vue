import Back from './Back.vue'
import HeaderBar from './HeaderBar.vue'
import Checkbox from './forms/Checkbox.vue'
import IosSwitch from './forms/IosSwitch.vue'
import Radio from './forms/Radio.vue'
import InputContainer from './forms/InputContainer.vue'
import Spinner from './load/Spinner.vue'
import LoadManager from './load/LoadManager.vue'
import ListManager from './load/ListManager.vue'
import Loading from './load/Loading.vue'

const components = {
  Back,
  HeaderBar,
  Checkbox,
  IosSwitch,
  Radio,
  InputContainer,
  Spinner,
  LoadManager,
  ListManager,
  Loading
}

export default {
  install(Vue) {
    for (let k in components) {
      Vue.component(k, components[k])
    }
  }
}

export {
  Back,
  HeaderBar,
  Checkbox,
  IosSwitch,
  Radio,
  InputContainer,
  Spinner,
  LoadManager,
  ListManager,
  Loading
}
