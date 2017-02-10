export default (number, prefix = 'R$') => {
  try {
    return prefix + number.toFixed(2).replace(/\./g, ',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.')
  } catch (e) {
    return number
  }
}
