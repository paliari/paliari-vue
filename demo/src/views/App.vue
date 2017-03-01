<template lang="pug">
div
  side-menu
  #main
    .header
      h1 Paliari Vue
      h2 A simple lib utilities for Vue.js
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
