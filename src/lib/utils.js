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

function isDate (arg)
{
  return Object.prototype.toString.call(arg) === '[object Date]'
}

function isRegExp (arg)
{
  return Object.prototype.toString.call(arg) === '[object RegExp]'
}

function _deepClone (obj) {
  if (isDate(obj)) { return new Date(obj) }
  if (isRegExp(obj)) { return obj }
  let ret = Array.isArray(obj) ? [] : {}
  for (let k in obj) {
    ret[k] = util.isObject(obj[k]) ? _deepClone(obj[k]) : obj[k]
  }
  return ret
}

function deepClone (obj) {
  if (!util.isObject(obj)) { return obj }
  return _deepClone(obj)
}

export default deepKey

export {
  deepKey,
  ucfirst,
  isDate,
  isRegExp,
  deepClone
}
