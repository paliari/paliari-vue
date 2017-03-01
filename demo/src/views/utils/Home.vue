<template lang="pug">
div
  h1.center Utils
  h2.center(v-if="title") {{title}}
  h4.center(v-else) Many util to use with Vue.js
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
