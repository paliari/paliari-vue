import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

function VuexMapper (mapper) {
  let computed = this.$options.computed || {}
  computed = Object.assign(computed,
    mapState(mapper.namespace, mapper.states || []),
    mapGetters(mapper.namespace, mapper.getters || [])
  )
  this.$options.computed = computed

  let methods = this.$options.methods || {}
  methods = Object.assign(methods,
    mapMutations(mapper.namespace, mapper.mutations || []),
    mapActions(mapper.namespace, mapper.actions || [])
  )
  this.$options.methods = methods
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
