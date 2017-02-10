<template lang="pug">
.side-menu
  a.menu-btn(@click='show')
    slot(name='btn-icon')
      i.fa.fa-lg(:class='icon' aria-hidden='true')
  .side-menu-bg(@click='hide' v-show='opened')
  .side-menu-content(:class='{open: opened}')
    header
      slot(name='header')
    div(@click='hide')
      slot
</template>

<script>
export default {
  props: {
    icon: {type: String, default: 'fa-bars'}
  },
  data() {
    return {
      opened: false
    }
  },
  methods: {
    show () {
      this.opened = true
    },
    hide () {
      this.opened = false
    }
  }
}
</script>

<style lang="stylus">
.side-menu
  display inline-block
  a.menu-btn
    text-decoration none
    cursor pointer
    padding 10px 0 10px 0
  .side-menu-bg, .side-menu-content
    position fixed
    top 0
    right 0
    left 0
    bottom 0
  .side-menu-bg
    background-color #000
    z-index 1999
    opacity .75
  .side-menu-content
    background-color #fff
    right auto
    left -275px
    width 275px
    max-width 275px
    min-height 100vh
    z-index 2000
    transition all 0.4s ease
    display block
    &.open
      transform translate(275px, 0)
.menu-right
  .side-menu-content
    left auto
    right -275px
    &.open
      transform translate(-275px, 0)
.ios
  .side-menu-bg, .side-menu-content
    top 20px
</style>
