export default (el, binding, vnode) => {
  el.style.backgroundImage = `url(${binding.value})`
  el.style.backgroundSize = 'cover'
  el.style.backgroundRepeat = 'no-repeat'
  el.style.backgroundPosition = 'center bottom'
  el.style.display = 'block'
}
