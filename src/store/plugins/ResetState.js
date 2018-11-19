import { deepClone } from 'paliari-js-utils'

export default store => {
  const initialState = deepClone(store.state)
  store.paliari = {
    resetState() {
      store.replaceState(deepClone(initialState))
    }
  }
}
