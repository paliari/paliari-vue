<template lang="pug">
.input-container(:class="{'has-icon': icon, 'has-label': label}")
  label(v-if='label') {{ label }}
  i.icon.fa.fa-lg(:class='icon' v-if='icon')
  slot
  .error-message
    slot(name='error-message') inválido.
</template>

<script>
export default {
  props: {
    label: String,
    icon: String
  }
}
</script>

<style lang="stylus">
.input-container
  display block
  position relative
  padding-bottom 15px
  margin-bottom 10px
  &.has-icon
    padding-left 25px
    padding-right 0
  &.has-label
    padding-top 15px
  &.inline
    display inline-block
    margin-right 10px
  label
    font-size .8em
    opacity .5
    position absolute
    top 0px
    padding-left 5px
  input[type="text"],
  input[type="password"],
  input[type="email"],
  input[type="url"],
  input[type="date"],
  input[type="month"],
  input[type="time"],
  input[type="datetime"],
  input[type="datetime-local"],
  input[type="week"],
  input[type="number"],
  input[type="search"],
  input[type="tel"],
  input[type="color"],
  select, textarea
    padding 1px
    display inline-block
    border none
    border-radius 0
    vertical-align middle
    box-sizing border-box
    width 100%
    height 2em
    background-color transparent
    border-bottom 1px solid #ccc
    box-shadow none
    &:focus
      outline 0
      border-bottom 2px solid #ccc
      padding-bottom 0
    &:invalid, &.error
      border-color #d9534f
      color #c56866
      + .error-message
        display block
    &[disabled]
      cursor not-allowed
      opacity .5
  .error-message
    display none
    position absolute
    bottom 0
    font-size .8em
    color #d9534f

  i.icon
    position absolute
    left 0
    right auto
    vertical-align middle
    bottom 15px
</style>
