function deepKey (obj, key) {
  for (let k of String(key).split('.')) {
    if (!obj) {
      return obj
    }
    obj = obj[k]
  }
  return obj
}

export default deepKey
export { deepKey }
