<template lang="pug">
transition(name='modal' v-if="show")
  .modal
    .modal-header.bg-yellow
      header-bar(:custom-title='title')
        div(slot='left')
          .button-left.red(@click="reject") {{cancelLabel}}
        div(slot='right')
          .button-right.blue(@click="resolve", :class="{disabled: permitSuccess}") {{okLabel}}
    .modal-body
      slot
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Endereço'
    },
    show: {
      type: Boolean,
      required: true
    },
    cancelLabel: {
      type: String,
      default: 'Cancel'
    },
    okLabel: {
      type: String,
      default: 'OK'
    },
    permitSuccess: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    reject () {
      this.$emit('close')
      this.$emit('cancel')
    },
    resolve () {
      if (!this.permitSuccess) {
        this.$dialogs.alert('Preencha os campos corretamente para continuar')
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
    height calc(100vh - 50px)
    overflow-y scroll
    overflow-x hidden
    .ios
      margin-top 20px

  .button-left
    margin-left 15px
  .button-right
    margin-right 15px
    &.disabled
      opacity 0.5

  &.modal-enter,
  &.modal-leave-active
    -webkit-transform translate(0, 100%)
    transform translate(0, 100%)
</style>
