export default (el, binding) => {
  if (binding.oldValue != binding.value) {
    el.innerText = binding.value
  }
}
