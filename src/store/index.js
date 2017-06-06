import base, {SUCCESS, LOADING, FAILURE} from './helpers/base'
import paginator from './helpers/paginator'
import crud from './helpers/crud'
import ResetState from './plugins/ResetState'

const StoreHelpers = {
  SUCCESS,
  LOADING,
  FAILURE,
  base,
  paginator,
  crud
}

const StorePlugins = {
  ResetState
}

export default StoreHelpers

export {
  StoreHelpers,
  StorePlugins
}
