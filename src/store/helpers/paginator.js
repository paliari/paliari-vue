import base, { SUCCESS, LOADING, FAILURE } from './base'

function create(obj, api) {
  const state = {
    per_page: null,
    page: 1,
    pages: 1,
    count: null,
    query: {},
    order: {},
    list: [],
    totais: {},
    sub_totais: {},
    current: null
  }

  const getters = {
    params(state) {
      return {
        per_page: state.per_page,
        page: state.page,
        pages: state.pages,
        order: state.order,
        q: state.query
      }
    },

    filtered(state) {
      return Object.values(state.query).filter(v => !!v).length > 0
    }
  }

  const actions = {
    fetchList({ commit, dispatch, getters }) {
      commit('setList', [])
      return dispatch('fetchRequest', api.list(getters.params)).then(
        response => {
          commit('setList', response.rows)
          commit('setTotais', response.totais || {})
          commit('setSubTotais', response.sub_totais || {})
          commit('setPage', response.page)
          commit('setPages', response.pages)
          commit('setCount', response.count)
          return response.rows
        }
      )
    },

    fetchOne({ commit, dispatch }, id) {
      commit('setCurrent', null)
      return dispatch('fetchRequest', api.one(id)).then(response => {
        commit('setCurrent', response)
        return response
      })
    },

    firstPage({ commit, dispatch, state }) {
      if (state.page > 1) {
        commit('setPage', 1)
        dispatch('fetchList')
      }
    },

    prevPage({ commit, dispatch, state }) {
      if (state.page > 1) {
        commit('setPage', state.page - 1)
        dispatch('fetchList')
      }
    },

    nextPage({ commit, dispatch, state }) {
      if (state.page == state.pages) return
      commit('setPage', state.page + 1)
      dispatch('fetchList')
    },

    lastPage({ commit, dispatch, state }) {
      if (state.pages > state.page) {
        commit('setPage', state.pages)
        dispatch('fetchList')
      }
    }
  }

  const mutations = {
    setList(state, list) {
      state.list = list
    },

    setTotais(state, totais) {
      state.totais = totais
    },

    setSubTotais(state, sub_totais) {
      state.sub_totais = sub_totais
    },

    setCurrent(state, current) {
      state.current = current
    },

    setPerPage(state, per_page) {
      state.per_page = per_page
    },

    setPage(state, page) {
      state.page = parseInt(page)
    },

    setPages(state, pages) {
      state.pages = parseInt(pages)
    },

    setCount(state, count) {
      state.count = parseInt(count)
    },

    setOrder(state, order) {
      state.order = order
    },

    setQuery(state, q) {
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

export { SUCCESS, LOADING, FAILURE }
