function VuexMapper(mapper, vuex) {
  let computed = this.$options.computed || {}
  this.$options.computed = {
    ...vuex.mapState(mapper.namespace, mapper.states || []),
    ...vuex.mapGetters(mapper.namespace, mapper.getters || []),
    ...computed
  }

  let methods = this.$options.methods || {}
  this.$options.methods = {
    ...vuex.mapMutations(mapper.namespace, mapper.mutations || []),
    ...vuex.mapActions(mapper.namespace, mapper.actions || []),
    ...methods
  }
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
