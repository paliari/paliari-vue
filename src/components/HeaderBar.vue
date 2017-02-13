<template lang="pug">
div
  .header-bar
    nav
      .header-bar-content
        .pure-g
          .pure-u-5-24
            .left
              slot(name='left')
                back
          .pure-u-14-24.center
            .title.ellipsis {{title}}
          .pure-u-5-24
            .right
              slot(name='right')
    .header-block
</template>

<script>
import Back from './Back.vue'

export default {
  components: { Back },
  computed: {
    title () {
      return this.$route.meta.title
    }
  }
}
</script>

<style lang="stylus">
.header-bar
  .center
    text-align center
  .header-block
    height 40px
    width 100%
    display block
  nav
    background-color #0078e7
    top 0
    width 100%
    position fixed
    color #fff
    z-index 3000
    .header-bar-content
      padding-top 10px
      padding-bottom 10px
      .title
        display block
        font-size 17px
      i
        margin-left 7px
        margin-right 7px
.ios
  .header-bar
    nav
      top 20px
</style>
