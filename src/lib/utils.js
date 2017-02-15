import {util} from 'vue'

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

function deepClone (obj) {
  obj = Object.assign({}, obj)
  for (let k in obj) {
    obj[k] = util.isObject(obj[k]) ? deepClone(obj[k]) : obj[k]
  }
  return obj
}

export default deepKey
export {
  deepKey,
  ucfirst,
  deepClone
}
