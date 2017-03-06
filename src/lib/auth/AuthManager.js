const PATHS = {
  signIn: '/sign_in',
  signUp: '',
  signOut: '/sign_out',
  confirmation: '/confirmation',
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

  resetPasswordRequest (params) {
    return this.api.post(this.paths.resetPassword, params)
  }

  resetPasswordUpdate (params) {
    return this.api.put(this.paths.resetPassword, params)
  }

  signOut (params) {
    let promise = this.api.delete(this.paths.signOut, params)
    promise.then( () => {
      this._token = null
      this.TokenManager.removeToken()
    })
    return promise
  }

  getToken () {
    if (!this._token) {
      this._token = this.TokenManager.getToken()
    }
    return this._token
  }

  current () {
    return this.api.get(this.paths.current)
  }

  getByConfirmationToken (params) {
    return this.api.post(this.paths.confirmation, params)
  }

}

export default AuthManager
