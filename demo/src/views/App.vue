<template lang="pug">
div
  side-menu
  #main
    .header
      h1 Paliari Vue
      h2 A simple lib utilities for Vue.js
      a.pure-button(href='https://github.com/paliari/paliari-vue', target='_blank', style='font-size: 1.2em; margin-bottom: 10px;')
        | See on Github&nbsp;
        i.fa.fa-github

    router-view.main-content
</template>

<script>
import SideMenu from '../components/SideMenu'
export default {
  components: { SideMenu }
}
</script>

<style lang="stylus">
#main
  margin-left 150px
  .main-content
    padding 15px
</style>
