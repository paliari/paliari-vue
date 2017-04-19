<template>
<div>
  I18n by javascript
  <pre>this.$util.i18n.hum('hello')</pre>
  <i>Output -></i> {{t}}

</div>
</template>

<script>
export default {
  computed: {
    t () {
      return this.$util.i18n.hum('hello')
    }
  }
}
</script>

<style lang="stylus">
</style>
