<template>
<div>
  I18n internacionalization. You must set the json translations in the initialization
  <pre>Vue.use(PaliariVue, {locales: require('../lib/locales/pt-br.json')})</pre>

  pt-br.json:
  <pre>{
  "hello": "Hello world",
  "hello2": "Hello world 2"
}</pre>

  Now you can use the translator:
  <pre>{{str}}            //Outputs -> Hello world</pre>
</div>
</template>

<script>
export default {
  data () {
    return {
      str: '<div v-translate="\'hello\'"></div>',
      str2: '<div v-t-model="\'usuario.name\'"></div>'
    }
  }
}
</script>

<style lang="stylus">
</style>
