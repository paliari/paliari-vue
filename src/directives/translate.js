import i18n from '../lib/i18n.js'

export default (el, binding) => {
  if (binding.oldValue != binding.value) {
    el.innerText = i18n.hum(binding.value)
  }
}
