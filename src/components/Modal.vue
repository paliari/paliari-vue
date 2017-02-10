<template lang="pug">
transition.modal(name='modal' v-if="show")
  .modal-bg
    .modal-wrapper(@click="reject(true)")
      .modal-container(@click.stop='')
        .modal-header
          slot(name='header') Atenção
        .modal-body
          slot
          .pure-form(v-if='prompt')
            .pure-g
              input.pure-u-1(type='password' v-if="'password' == prompt" v-model='promptText')
              input.pure-u-1(type='text' v-else-if='prompt' v-model='promptText')
        .modal-footer
          slot(name='footer')
            .default-footer
              button.pure-button.button-error(@click="reject(false)" v-if='confirm') {{ cancel }}
              button.pure-button.pure-button-primary(@click="resolve") {{ ok }}
</template>

<script>
export default {
  props: {
    ok: {
      type: String,
      required: false,
      default: 'Ok'
    },
    cancel: {
      type: String,
      required: false,
      default: 'Cancel'
    },
    confirm: {
      type: Boolean,
      default: false
    },
    prompt: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      promptText: null
    }
  },
  methods: {
    reject (outside) {
      if (outside && this.confirm) return
      this.$emit('close')
      this.$emit('cancel')
    },
    resolve () {
      this.$emit('close')
      this.$emit('success', this.promptText)
    }
  }
}
</script>

<style lang="stylus">
.modal
  .modal-bg
    position fixed
    z-index 9998
    top 0
    left 0
    width 100%
    height 100%
    background-color rgba(0, 0, 0, .6)
    display table
    transition opacity .2s ease

  .modal-wrapper
    display table-cell
    vertical-align middle

  .modal-container
    margin 10px
    padding 10px
    background-color #fff
    border-radius 15px
    box-shadow 0 2px 8px rgba(0, 0, 0, .33)
    transition all .2s ease

  .modal-header
    font-size 1.2em
    .success
      color #42b983
    .error
      color #b85c5c

  .modal-body
    margin 20px 0

  .default-footer
    width 100%
    text-align right
    button
      margin-left 10px

  .modal-enter
    opacity 0

  .modal-leave-active
    opacity 0

  .modal-enter .modal-container,
  .modal-leave-active .modal-container
    -webkit-transform scale(0.1)
    transform scale(0.1)
</style>
