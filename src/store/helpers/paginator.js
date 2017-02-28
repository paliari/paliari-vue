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
      dispatch('fetchRequest', api.list(getters.params)).then((response) => {
        commit('setList', response.data.rows)
        commit('setPage', response.data.page)
        commit('setPages', response.data.pages)
      })
    },
    fetchOne ({commit, dispatch}, id) {
      commit('setCurrent', null)
      dispatch('fetchRequest', api.one(id)).then((response) => {
        commit('setCurrent', response.data)
      })
    },

    prevPage ({commit, dispatch, state}) {
      let page = state.page > 1 ? state.page - 1 : 1
      commit('setPage', page)
      dispatch('fetchList')
    },
    nextPage ({commit, dispatch, state}) {
      if (state.page == state.pages) return
      commit('setPage', state.page + 1)
      dispatch('fetchList')
    }
  }

  const mutations = {
    setList (state, list) {
      state.list = list
    },
    setCurrent (state, current) {
      state.current = current
    },
    setPage (state, page) {
      state.page = page
    },
    setPages (state, pages) {
      state.pages = pages
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
