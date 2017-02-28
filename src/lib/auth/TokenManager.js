const header_keys = ['access-token', 'client', 'expiry', 'token-type', 'uid']
const STORAGE_KEY = 'auth_token'
const extractHeaders = (headers) => {
  let ret = {}
  for (let key of header_keys) {
    ret[key] = headers[key]
  }
  return ret
}

export default {
  setToken (headers) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(extractHeaders(headers)))
  },

  getToken () {
    let item = localStorage.getItem(STORAGE_KEY)
    return item ? JSON.parse(item) : ''
  },

  removeToken () {
    localStorage.removeItem(STORAGE_KEY)
  }

}

export {
  STORAGE_KEY,
  extractHeaders
}
