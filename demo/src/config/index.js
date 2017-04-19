import Vue from 'vue'

import PaliariVue from 'paliari-vue'
import 'paliari-vue/dist/paliari-vue.min.css'

Vue.use(PaliariVue, {locales: require('../lib/locales/pt-br.json')})

import FastClick from 'fastclick'
FastClick.attach(document.body, {})

import router from './router'

if (process.env.NODE_ENV === 'development') {
  window.Vue = Vue
}

export default {
  router
}
