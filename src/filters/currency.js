export default (number, prefix = '', suffix = '') => {
  try {
    return prefix + parseFloat(number).toFixed(2).replace(/\./g, ',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.') + suffix
  } catch (e) {
    return number
  }
}
