<template lang="pug">
.ios-switch
  input(:id='id', :checked='value', :name='name', :disabled='disabled'
        @change="$emit('input', $event.target.checked ? $event.target.value : false)" type='checkbox')
  label.switcher(:for='id')
</template>

<script>
export default {
  props: ['value', 'name', 'disabled'],
  computed: {
    id () {
      return 'switch-' + this.name + this._uid
    }
  }
}
</script>

<style lang="stylus">
.ios-switch
  .switcher
    width 43px
    height 25px
    background #ffffff
    border 2px solid #e6e6e6
    padding 0
    position relative
    display block
    -moz-border-radius 100px
    -webkit-border-radius 100px
    border-radius 100px
    -moz-transition box-shadow 0.2s ease-out 0.02s, border-color 0.2s ease-out
    -o-transition box-shadow 0.2s ease-out 0.02s, border-color 0.2s ease-out
    -webkit-transition box-shadow 0.2s ease-out, border-color 0.2s ease-out
    -webkit-transition-delay 0.02s, 0s
    transition box-shadow 0.2s ease-out 0.02s, border-color 0.2s ease-out

    &:after
      background #ffffff
      position absolute
      top 0
      left 0
      content ""
      -moz-transform translateX(0)
      -ms-transform translateX(0)
      -webkit-transform translateX(0)
      transform translateX(0)
      -moz-transition all 0.2s ease-out
      -o-transition all 0.2s ease-out
      -webkit-transition all 0.2s ease-out
      transition all 0.2s ease-out
      -moz-box-shadow 0 1px 3px rgba(0, 0, 0, 0.4)
      -webkit-box-shadow 0 1px 3px rgba(0, 0, 0, 0.4)
      box-shadow 0 1px 3px rgba(0, 0, 0, 0.4)
      -moz-border-radius 100px
      -webkit-border-radius 100px
      border-radius 100px

    &:hover:active
      -moz-box-shadow 0px 0px 0px 13px #e6e6e6 inset
      -webkit-box-shadow 0px 0px 0px 13px #e6e6e6 inset
      box-shadow 0px 0px 0px 13px #e6e6e6 inset

      &:after
        width 28.35px !important

    &:after
      height 25px
      width 25px

  input[type="checkbox"]
    display none
    &:checked
      + .switcher
        -moz-transition box-shadow 0.2s ease-out, border-color 0.2s ease-out 0.02s
        -o-transition box-shadow 0.2s ease-out, border-color 0.2s ease-out 0.02s
        -webkit-transition box-shadow 0.2s ease-out, border-color 0.2s ease-out
        -webkit-transition-delay 0s, 0.02s
        transition box-shadow 0.2s ease-out, border-color 0.2s ease-out 0.02s
        border-color #16b85f
        -moz-box-shadow 0px 0px 0px 13px #16b85f inset
        -webkit-box-shadow 0px 0px 0px 13px #16b85f inset
        box-shadow 0px 0px 0px 13px #16b85f inset

        &:after
          -moz-transform translateX(18px)
          -ms-transform translateX(18px)
          -webkit-transform translateX(18px)
          transform translateX(18px)

        &:hover:active:after
          -moz-transform translateX(10.65px)
          -ms-transform translateX(10.65px)
          -webkit-transform translateX(10.65px)
          transform translateX(10.65px)

      &:disabled + .switcher
        border-color #cccccc !important
        -moz-box-shadow 0px 0px 0px 15px #cccccc inset !important
        -webkit-box-shadow 0px 0px 0px 15px #cccccc inset !important
        box-shadow 0px 0px 0px 15px #cccccc inset !important

    &:disabled
      + .switcher
        opacity 0.6
        cursor not-allowed
        -moz-box-shadow 0px 0px 0px transparent !important
        -webkit-box-shadow 0px 0px 0px transparent !important
        box-shadow 0px 0px 0px transparent !important

      + .switcher:after
        height 25px !important
        width 25px !important

      &:checked + .switcher:after
        -moz-transform translateX(18px) !important
        -ms-transform translateX(18px) !important
        -webkit-transform translateX(18px) !important
        transform translateX(18px) !important

  &.lg
    .switcher
      width 53px
      height 30px

      &:hover:active
        -moz-box-shadow 0px 0px 0px 13px #e6e6e6 inset
        -webkit-box-shadow 0px 0px 0px 13px #e6e6e6 inset
        box-shadow 0px 0px 0px 13px #e6e6e6 inset

      &:hover:active:after
        width 35.1px !important

      &:after
        height 30px
        width 30px

    input[type="checkbox"]
      &:disabled + .switcher:after
        height 30px !important
        width 30px !important

      &:disabled:checked + .switcher:after
        -moz-transform translateX(23px) !important
        -ms-transform translateX(23px) !important
        -webkit-transform translateX(23px) !important
        transform translateX(23px) !important

      &:checked + .switcher
        border-color #16b85f
        -moz-box-shadow 0px 0px 0px 15px #16b85f inset
        -webkit-box-shadow 0px 0px 0px 15px #16b85f inset
        box-shadow 0px 0px 0px 15px #16b85f inset

        &:after
          -moz-transform translateX(23px)
          -ms-transform translateX(23px)
          -webkit-transform translateX(23px)
          transform translateX(23px)

        &:hover:active:after
          -moz-transform translateX(13.9px)
          -ms-transform translateX(13.9px)
          -webkit-transform translateX(13.9px)
          transform translateX(13.9px)
</style>
