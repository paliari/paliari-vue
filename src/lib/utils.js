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

function isDate (d)
{
  return (null != d) && !isNaN(d) && ("undefined" !== typeof d.getDate);
}

function deepClone (obj) {
  if (isDate(obj)) { return new Date(obj) }
  let ret = Array.isArray(obj) ? [] : {}
  for (let k in obj) {
    ret[k] = util.isObject(obj[k]) ? deepClone(obj[k]) : obj[k]
  }
  return ret
}

export default deepKey
export {
  deepKey,
  ucfirst,
  isDate,
  deepClone
}
