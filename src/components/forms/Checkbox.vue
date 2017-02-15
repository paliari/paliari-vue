<template lang="pug">
.checkbox
  input(:id='id', :checked='value', :name='name', :disabled='disabled'
        @change="$emit('input', $event.target.checked ? $event.target.value : false)" type='checkbox')
  label(:for='id')
    slot {{label}}
</template>

<script>
export default {
  props: ['value', 'label', 'name', 'disabled'],
  computed: {
    id () {
      return 'cb-' + this.name + this._uid
    }
  }
}
</script>

<style lang="stylus">
$radio-border = 2px solid #039be5
$radio-border-disabled = 2px solid rgba(0,0,0, .26)
.checkbox
  [type="checkbox"]:not(:checked), [type="checkbox"]:checked
    position absolute
    left -9999px
    opacity 0

  [type="checkbox"]
    + label
      position relative
      padding-left 35px
      display inline-block
      height 30px
      line-height 30px
      font-size 1rem

      -webkit-user-select none
      -moz-user-select none
      -khtml-user-select none
      -ms-user-select none
      user-select none

    + label:before, + label:after
      content ''
      position absolute
      top 0
      left 0
      width 18px
      height 18px
      z-index 0
      border 2px solid #999
      border-radius 1px
      margin-top 0
      transition .3s ease-out

    + label:after
      border 0
      transform scale(0)

    &:not(:checked):disabled + label:before
      border none
      background-color rgba(0,0,0, .26)

    &.tabbed:focus + label:after
      transform scale(1)
      border 0
      border-radius 50%
      box-shadow 0 0 0 10px rgba(0,0,0,.1)
      background-color rgba(0,0,0,.1)

  [type="checkbox"]:checked
    + label:before
      top -4px
      left -5px
      width 12px
      height 22px
      border-top 2px solid transparent
      border-left 2px solid transparent
      border-right $radio-border
      border-bottom $radio-border
      transform rotate(40deg)
      backface-visibility hidden
      transform-origin 100% 100%

    &:disabled + label:before
      border-right $radio-border-disabled
      border-bottom $radio-border-disabled
</style>
