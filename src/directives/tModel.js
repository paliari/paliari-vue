import i18n from '../lib/i18n.js'

export default (el, binding) => {
  if (binding.oldValue != binding.value) {
    let key = 'activerecord.' + (2 == binding.value.split('.').length ? 'attributes.' : 'models.') + binding.value
    el.innerText = i18n.hum(key)
  }
}
