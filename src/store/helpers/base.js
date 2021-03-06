const SUCCESS = 'success'
const LOADING = 'loading'
const FAILURE = 'failure'

function create(obj) {
  const state = {
    status: SUCCESS
  }

  const getters = {
    success: state => SUCCESS == state.status,
    loading: state => LOADING == state.status,
    failure: state => FAILURE == state.status
  }

  const actions = {
    fetchRequest ({commit}, promise) {
      commit('setLoading')
      promise.then( () => commit('setSuccess') )
      promise.catch( () => commit('setFailure') )
      return promise
    }
  }

  const mutations = {
    setLoading (state) {
      state.status = LOADING
    },
    setSuccess (state) {
      state.status = SUCCESS
    },
    setFailure (state) {
      state.status = FAILURE
    }
  }

  obj.state = Object.assign(state, obj.state)
  obj.getters = Object.assign(getters, obj.getters)
  obj.actions = Object.assign(actions, obj.actions)
  obj.mutations = Object.assign(mutations, obj.mutations)

  return obj
}

export default create

export {
  SUCCESS,
  LOADING,
  FAILURE
}
