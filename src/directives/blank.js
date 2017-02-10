export default (el, binding, vnode) => {
  if (binding.oldValue != binding.value) {
    if (window.cordova && window.cordova.InAppBrowser) {
      el.onclick = function () {
        window.cordova.InAppBrowser.open(binding.value, '_system', 'location=yes')
      }
    } else {
      el.href = binding.value
      el.target = '_blank'
    }
  }
}
