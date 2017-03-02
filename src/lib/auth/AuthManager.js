const PATHS = {
  signIn: '/sign_in',
  signUp: '',
  signOut: '/sign_out',
  resetPassword: '/password',
  current: '/current'
}

class AuthManager {
  constructor({ api, TokenManager, basePath = '/auth', paths = {} }) {
    this.api = api
    this.TokenManager = TokenManager
    this.paths = {}
    for (let k in PATHS) {
      this.paths[k] = basePath+(paths[k] || PATHS[k])
    }
	}

  signIn (params) {
    let promise = this.api.post(this.paths.signIn, params)
    promise.then((response) => {
      this.TokenManager.setToken(response.headers)
    })
    return promise
  }

  signUp (params) {
    return this.api.post(this.paths.signUp, params)
  }

  resetPassword (params) {
    return this.api.post(this.paths.resetPassword, params)
  }

  signOut (params) {
    let promise = this.api.delete(this.paths.signOut, params)
    promise.then(() => { this.TokenManager.removeToken() })
    return promise
  }

  getToken () {
    return this.TokenManager.getToken()
  }

  current () {
    return this.api.get(this.paths.current)
  }

}

export default AuthManager
