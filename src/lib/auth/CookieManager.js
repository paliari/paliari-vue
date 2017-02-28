import {extractHeaders, STORAGE_KEY} from './TokenManager'

export default {
  setToken (headers) {
    document.cookie = `${STORAGE_KEY}=${JSON.stringify(extractHeaders(headers))}`
  },

  getToken () {
    let reg = new RegExp('(?:(?:^|.*;\s*)'+STORAGE_KEY+'\s*\=\s*([^;]*).*$)|^.*$')
    let value = document.cookie.replace(reg, "$1")

    return value ? JSON.parse(value) : ''
  },

  removeToken () {
    document.cookie = `${STORAGE_KEY}=`
  }

}
