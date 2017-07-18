export default (number, prefix = '', sufix = '') => {
  try {
    return prefix + parseFloat(number).toFixed(2).replace(/\./g, ',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.') + sufix
  } catch (e) {
    return number
  }
}
