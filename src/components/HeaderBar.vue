<template lang="pug">
div
  .header-bar(:style="{color: color, backgroundColor: backgroundColor}")
    .header-bar-content
      .header-bar-content-left
        slot(name='left')
          back
      .header-bar-content-center {{title}}
      .header-bar-content-right
        slot(name='right')
</template>

<script>
import Back from './Back.vue'

export default {
  components: { Back },
  props: {
    customTitle: {type: String},
    backgroundColor: {type: String, default: '#0075EA'},
    color: {type: String, default: '#FFFFFF'}
  },
  computed: {
    title () {
      return this.customTitle || this.$route.meta.title
    }
  }
}
</script>

<style lang="stylus">
.header-bar
  padding 10px 5px 10px 5px
  .header-bar-content
    display -webkit-flex
    display flex
    line-height 1.3
    height 20px
    .header-bar-content-left
      -webkit-flex 2
      flex 2
      max-width 20%
      *
        margin 0
        padding 0
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
    .header-bar-content-center
      text-align center
      -webkit-flex 6
      flex 6
      white-space nowrap
      overflow hidden
      text-overflow ellipsis
    .header-bar-content-right
      -webkit-flex 2
      flex 2
      width 20%
      text-align right
      *
        margin 0
        padding 0
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
</style>
