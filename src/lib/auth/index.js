import AuthManager from './AuthManager'
import TokenManager from './TokenManager'
import CookieManager from './CookieManager'

/**
Object with urls e.g:
paths = {
  signIn: '/sign_in',
  signUp: '',
  signOut: '/sign_out',
  resetPassword: '/password'
  current: '/current'
}
*/
export default {
  install(Vue, { api, TokenManager, basePath, paths = {} }) {
    let auth = new AuthManager({api, TokenManager, basePath, paths})
    api.interceptors.request.use((config) => {
      config.headers = TokenManager.getToken()
      return config
    }, (error) => {
      return Promise.reject(error)
    })
    Vue.prototype.$auth = auth
    Vue.auth = auth
	}

}

export {
  AuthManager,
  TokenManager,
  CookieManager
}
