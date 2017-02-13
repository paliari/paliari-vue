function deepKey (obj, key) {
  for (let k of String(key).split('.')) {
    if (!obj) {
      return obj
    }
    obj = obj[k]
  }
  return obj
}

function ucfirst (str) {
  if (!str) { return str }
  return str.charAt(0).toUpperCase() + str.substr(1)
}

export default deepKey
export {
  deepKey,
  ucfirst
}
