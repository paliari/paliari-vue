<template lang="pug">
.side-menu-items
  .side-menu-item(v-for='m in items')
    .side-menu-divider(v-if='m.divider')
    router-link.side-menu-link.ellipsis(:to='m.to' v-else)
      i.fa.fa-lg.fa-fw(:class="m.icon" aria-hidden='true')
      | {{m.label}}
</template>

<script>
export default {
  props: {
    items: {type: Object, required: true}
  },
  methods: {
    hide () {
      console.log('click hide')
    }
  }
}
</script>

<style lang="stylus">
.side-menu-items
  margin 0
  padding 0
  max-height 100vh
  bottom 0
  overflow-y scroll
  overflow-x hidden
  text-align left
  .side-menu-divider
    border-bottom none
    height 1px
    background-color #999
  .side-menu-item
    position relative
    border-bottom 1px solid #eae8e8
    .side-menu-link
      display block
      padding-top 15px
      padding-bottom 10px
      text-decoration none
      white-space nowrap
      color #777
      font-size .9em
.ios
  .side-menu-items
    max-height calc(100vh - 20px)
</style>
