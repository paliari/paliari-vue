export default (el, binding, vnode) => {
  if (binding.oldValue != binding.value) {
    el.onclick = function () {
      if (window.cordova && window.cordova.InAppBrowser) {
        window.cordova.InAppBrowser.open(binding.value, '_system', 'location=yes')
      } else {
        window.open(binding.value, '_blank', 'location=yes')
      }
    }
  }
}
