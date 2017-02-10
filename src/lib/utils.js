function deepKey (obj, key) {
  if (obj && key) {
    for (let k in String(key).split('.')) {
      if (!obj) {
        return obj
      }
      obj = obj[k]
    }
  }
  return obj
}

export default deepKey
export { deepKey }
