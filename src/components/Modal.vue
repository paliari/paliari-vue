<template lang="pug">
transition(name='modal' v-if="show")
  .modal(:class='{ios: isIos}')
    header-bar.modal-header(:custom-title='title', :color='headerColor', :background-color='headerBackgroundColor')
      .button-left(@click="reject", slot='left') {{cancelLabel}}
      .button-right(@click="resolve", :class="{disabled: !permitSuccess}", slot='right') {{okLabel}}
    .modal-body
      slot
</template>

<script>
import HeaderBar from './HeaderBar.vue'
import Dialogs from '../lib/dialogs.js'
export default {
  components: { HeaderBar },
  props: {
    title: {
      type: String,
      default: 'Modal title'
    },
    show: {
      type: Boolean,
      required: true
    },
    cancelLabel: {
      type: String,
      default: 'Cancelar'
    },
    okLabel: {
      type: String,
      default: 'OK'
    },
    permitSuccess: {
      type: Boolean,
      default: true
    },
    headerColor: {
      type: String,
      default: '#FFFFFF'
    },
    headerBackgroundColor: {
      type: String,
      default: '#0075EA'
    }
  },
  computed: {
    isIos() {
      return /iphone|ipod|ipad/i.test(window.navigator.userAgent)
    }
  },
  methods: {
    reject () {
      this.$emit('close')
      this.$emit('cancel')
    },
    resolve () {
      if (!this.permitSuccess) {
        Dialogs.alert('Preencha os campos corretamente para continuar')
        return
      }
      this.$emit('close')
      this.$emit('success')
    }
  }
}
</script>

<style lang="stylus">
.modal
  z-index 3000
  position fixed
  background-color white
  top 0
  bottom 0
  left 0
  right 0
  -webkit-transition all .3s ease
  transition all .3s ease

  .modal-body
    height calc(100vh - 60px)
    overflow-y scroll
    overflow-x hidden
  .button-left
    font-size .8em
    padding-top 3px !important
    padding-left 5px !important
  .button-right
    text-align right
    font-size .8em
    padding-top 3px !important
    padding-right 10px !important
    &.disabled
      opacity 0.5

  &.modal-enter,
  &.modal-leave-active
    -webkit-transform translate(0, 100%)
    transform translate(0, 100%)
</style>
