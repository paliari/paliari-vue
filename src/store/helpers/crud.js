import paginator, {SUCCESS, LOADING, FAILURE} from './paginator'

function findIndex(list, id) {
  return list.findIndex(i => i.id == id)
}

function create(obj, api) {
  const actions = {
    fetchCreate ({commit, dispatch}, params) {
      return dispatch('fetchRequest', api.create(params)).then((response) => {
        commit('addToList', response)
        return response
      })
    },
    fetchUpdate ({commit, dispatch}, params) {
      return dispatch('fetchRequest', api.update(params)).then((response) => {
        commit('replaceItemToList', response)
        return response
      })
    },
    fetchRemove ({commit, dispatch}, id) {
      return dispatch('fetchRequest', api.remove(id)).then((response) => {
        commit('removeFromList', id)
        return response
      })
    },

  }

  const mutations = {
    removeFromList (state, id) {
      let index = findIndex(state.list, id)
      if (index > -1) {
        return state.list.splice(index, 1)
      }
    },
    addToList (state, item) {
      state.list.unshift(item)
    },
    replaceItemToList (state, item) {
      let index = findIndex(state.list, item.id)
      if (index > -1) {
        state.list[index] = item
      }
    },
  }

  obj = paginator(obj, api)

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
