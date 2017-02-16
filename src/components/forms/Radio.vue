<template lang="pug">
.radio
  input(:id='id', :name='name', :value='data', v-model='model', :disabled='disabled' type='radio')
  label(:for='id')
    slot {{label}}
</template>

<script>
export default {
  props: {
    label: String,
    name: String,
    value: null,
    data: null,
    disabled: false
  },
  computed: {
    id () {
      return 'radio-' + this.name + this._uid
    },
    model: {
      get () {
        return this.value
      },
      set (newModel) {
        this.$emit('input', newModel)
      }
    }
  }
}
</script>

<style lang="stylus">
$input-disabled-color = rgba(0,0,0, .26)
$radio-fill-color = #039be5
$radio-border = 2px solid #039be5

.radio
  label
    width 100%
  [type="radio"]:not(:checked),
  [type="radio"]:checked
    position absolute
    left -9999px
    opacity 0

  [type="radio"]:not(:checked) + label,
  [type="radio"]:checked + label
    position relative
    padding-left 35px
    cursor pointer
    display inline-block
    height 25px
    line-height 25px
    font-size 1rem
    transition .28s ease

    -khtml-user-select none
    user-select none

  [type="radio"] + label:before,
  [type="radio"] + label:after
    content ''
    position absolute
    left 0
    top 0
    margin 4px
    width 16px
    height 16px
    z-index 0
    transition .28s ease

  [type="radio"]:not(:checked) + label:before,
  [type="radio"]:not(:checked) + label:after,
  [type="radio"]:checked + label:before,
  [type="radio"]:checked + label:after
    border-radius 50%

  [type="radio"]:not(:checked) + label:before,
  [type="radio"]:not(:checked) + label:after
    border 2px solid #999

  [type="radio"]:not(:checked) + label:after
    transform scale(0)

  [type="radio"]:checked + label:before
    border 2px solid transparent

  [type="radio"]:checked + label:after
    border $radio-border

  [type="radio"]:checked + label:after
    background-color $radio-fill-color

  [type="radio"]:checked + label:after
    transform scale(1.02)

  [type="radio"].tabbed:focus + label:before
    box-shadow 0 0 0 10px rgba(0,0,0,.1)

  [type="radio"]:disabled:not(:checked) + label:before,
  [type="radio"]:disabled:checked + label:before
    background-color transparent
    border-color $input-disabled-color

  [type="radio"]:disabled + label
    color $input-disabled-color

  [type="radio"]:disabled:not(:checked) + label:before
    border-color $input-disabled-color

  [type="radio"]:disabled:checked + label:after
    background-color $input-disabled-color
    border-color $input-disabled-solid-color

  &.gap
    [type="radio"]:checked + label:before,
    [type="radio"]:checked + label:after
      border-radius 50%

    [type="radio"]:checked + label:before,
    [type="radio"]:checked + label:after
      border $radio-border

    [type="radio"]:checked + label:after
      background-color $radio-fill-color

    [type="radio"]:checked + label:after
      transform scale(.5)

    [type="radio"]:disabled:checked + label:before
      border 2px solid $input-disabled-color

    [type="radio"]:disabled:checked + label:after
      border none
      background-color $input-disabled-color
</style>
