import Back from './Back.vue'
import HeaderBar from './HeaderBar.vue'
import Modal from './Modal.vue'
import Checkbox from './forms/Checkbox.vue'
import IosSwitch from './forms/IosSwitch.vue'
import Radio from './forms/Radio.vue'
import MaskInput from './forms/MaskInput.vue'
import InputContainer from './forms/InputContainer.vue'
import SideMenu from './menu/SideMenu.vue'
import SideMenuItems from './menu/SideMenuItems.vue'
import Spinner from './load/Spinner.vue'
import LoadManager from './load/LoadManager.vue'
import ListManager from './load/ListManager.vue'

const components = {
  Back,
  HeaderBar,
  Modal,
  Checkbox,
  IosSwitch,
  Radio,
  MaskInput,
  InputContainer,
  SideMenu,
  SideMenuItems,
  Spinner,
  LoadManager,
  ListManager
}

export default {
  install (Vue) {
    for (let k in components) {
      Vue.component(k, components[k])
    }
  }
}

export {
  Back,
  HeaderBar,
  Modal,
  Checkbox,
  IosSwitch,
  Radio,
  MaskInput,
  InputContainer,
  SideMenu,
  SideMenuItems,
  Spinner,
  LoadManager,
  ListManager
}
