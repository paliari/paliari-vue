import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

function VuexMapper (mapper) {
  let computed = this.$options.computed || {}
  this.$options.computed = {
    ...mapState(mapper.namespace, mapper.states || []),
    ...mapGetters(mapper.namespace, mapper.getters || []),
    ...computed,
  }

  let methods = this.$options.methods || {}
  this.$options.methods = {
    ...mapMutations(mapper.namespace, mapper.mutations || []),
    ...mapActions(mapper.namespace, mapper.actions || []),
    ...methods,
  }
}

export default {
  install (Vue, options) {
    options = Object.assign({key: 'vuex'}, options)

    Vue.mixin({
      beforeCreate () {
        let mapper = this.$options[options.key]
        if (mapper) {
          VuexMapper.call(this, mapper)
        }
      }
    })
  }
}
