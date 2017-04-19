<template>
<div>
  <h2>
    Use <a href="https://vuejs-tips.github.io/vue-the-mask/" target="_blank">the-mask</a>
  </h2>
</div>
</template>

<script>
export default {
  created () {
    console.log(this.$util.masks.default(this.$util.masks.clear('1234.56'), '9.990,00'));
  }
}
</script>

<style lang="stylus">
</style>
