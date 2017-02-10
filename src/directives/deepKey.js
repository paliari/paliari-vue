import {deepKey} from '../lib/utils.js'

export default (el, binding, vnode) => {
  if (binding.oldValue != binding.value) {
    el.innerText = deepKey(binding.value, vnode.key)
  }
}
