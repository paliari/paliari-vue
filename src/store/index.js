import base, {SUCCESS, LOADING, FAILURE} from './helpers/base'
import paginator from './helpers/paginator'
import ResetState from './plugins/ResetState'

const StoreHelpers = {
  SUCCESS,
  LOADING,
  FAILURE,
  base,
  paginator
}

const StorePlugins = {
  ResetState
}

export default StoreHelpers

export {
  StoreHelpers,
  StorePlugins
}
