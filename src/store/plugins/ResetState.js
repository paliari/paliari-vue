import { deepClone } from '../../lib/utils'

export default (store) => {
  const initialState = deepClone(store.state)
  store.paliari = {
    resetState () { store.replaceState(deepClone(initialState)) }
  }
}
