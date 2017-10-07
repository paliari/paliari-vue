<template>
<div>
  I18n by javascript
  First you need to configure the locale file
  <pre>import PaliariVue from 'paliari-vue'
Vue.use(PaliariVue, {locales: require('./path/to/locales/en|pt-BR.json')})</pre>
  <pre>this.$util.i18n.hum('hello')</pre>
  <i>Output -></i> Hello world

</div>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
</style>
