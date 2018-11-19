function VuexMapper(mapper, vuex) {
  let computed = this.$options.computed || {}
  this.$options.computed = Object.keys(mapper).reduce((o, namespace) => {
    return {
      ...vuex.mapState(namespace, mapper[namespace].state || []),
      ...vuex.mapGetters(namespace, mapper[namespace].getters || []),
      ...o
    }
  }, computed)

  let methods = this.$options.methods || {}
  this.$options.methods = Object.keys(mapper).reduce((o, namespace) => {
    return {
      ...vuex.mapMutations(namespace, mapper[namespace].mutations || []),
      ...vuex.mapActions(namespace, mapper[namespace].actions || []),
      ...o
    }
  }, methods)
}

export default {
  install(Vue, vuex) {
    Vue.mixin({
      beforeCreate() {
        let mapper = this.$options['vuex']
        if (mapper) {
          VuexMapper.call(this, mapper, vuex)
        }
      }
    })
  }
}
