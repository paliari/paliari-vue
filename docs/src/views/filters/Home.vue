<template lang="pug">
div
  h1.center Filters
  h2.center(v-if="title") {{title}}
  h4.center(v-else) Many filters to use with Vue.js
  router-view
</template>

<script>
export default {
  computed: {
    title () {
      return this.$route.meta.title
    }
  }
}
</script>

<style lang="stylus">
</style>
