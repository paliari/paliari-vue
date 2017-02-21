import Back from './Back.vue'
import HeaderBar from './HeaderBar.vue'
import Modal from './Modal.vue'
import Checkbox from './forms/Checkbox.vue'
import IosSwitch from './forms/IosSwitch.vue'
import Radio from './forms/Radio.vue'
import SideMenu from './menu/SideMenu.vue'
import SideMenuItems from './menu/SideMenuItems.vue'
import LoadManager from './load/LoadManager.vue'
import ListManager from './load/ListManager.vue'

const components = {
  Back,
  HeaderBar,
  Modal,
  Checkbox,
  IosSwitch,
  Radio,
  SideMenu,
  SideMenuItems,
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
  SideMenu,
  SideMenuItems,
  LoadManager,
  ListManager
}
