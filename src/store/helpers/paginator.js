import base, {SUCCESS, LOADING, FAILURE} from './base'

function create(obj, api) {
  const state = {
    page: 1,
    pages: 1,
    query: {},
    list: [],
    current: null
  }

  const getters = {
    params (state) {
      return {
        page: state.page,
        pages: state.pages,
        q: state.query
      }
    }
  }

  const actions = {
    fetchList ({commit, dispatch, getters}) {
      commit('setList', [])
      return dispatch('fetchRequest', api.list(getters.params)).then((response) => {
        commit('setList', response.rows)
        commit('setPage', response.page)
        commit('setPages', response.pages)
        return response.rows
      })
    },
    fetchOne ({commit, dispatch}, id) {
      commit('setCurrent', null)
      return dispatch('fetchRequest', api.one(id)).then((response) => {
        commit('setCurrent', response)
        return response
      })
    },

    firstPage ({commit, dispatch, state}) {
      if (state.page > 1) {
        commit('setPage', 1)
        dispatch('fetchList')
      }
    },
    prevPage ({commit, dispatch, state}) {
      if (state.page > 1) {
        commit('setPage', state.page - 1)
        dispatch('fetchList')
      }
    },
    nextPage ({commit, dispatch, state}) {
      if (state.page == state.pages) return
      commit('setPage', state.page + 1)
      dispatch('fetchList')
    },
    lastPage ({commit, dispatch, state}) {
      if (state.pages > state.page) {
        commit('setPage', state.pages)
        dispatch('fetchList')
      }
    },
  }

  const mutations = {
    setList (state, list) {
      state.list = list
    },
    setCurrent (state, current) {
      state.current = current
    },
    setPage (state, page) {
      state.page = parseInt(page)
    },
    setPages (state, pages) {
      state.pages = parseInt(pages)
    },
    setQuery (state, q) {
      state.query = q
    }
  }

  obj = base(obj)

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
