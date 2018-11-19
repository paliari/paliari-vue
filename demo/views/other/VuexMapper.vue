<template>
<div>
  Mixin to map vuex in the components
  <br>
  <p>1 - Install (Pass <b>Vuex</b> when install)</p>
  <pre>import Vue from 'vue'
import Vuex from 'vuex'
import PaliariVue from 'paliari-vue'
Vue.use(PaliariVue, { Vuex })</pre> 

  <p>2 - Then in your components</p>
  <pre>export default {
  vuex: {
    products: {
      state: ['list', 'status', 'page', 'pages', 'query'],
      getters: ['someGetter']
      actions: ['fetchList', 'prevPage', 'nextPage']
      mutations: ['someMutation']
    },
    session: {
      state: ['currentUser']
    }
  },
}</pre>
</div>
</template>

<script>
import TextBind from '@/directives/TextBind.js'
export default {
  directives: { TextBind },
  data() {
    return {
      str: '<div v-text-bind="\'myProp\'"></div>',
      str2: '<div v-t-model="\'usuario.name\'"></div>'
    }
  }
}
</script>

<style lang="stylus">
</style>
