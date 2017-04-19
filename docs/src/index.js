import Vue from 'vue'
import Config from './config'
import App from './views/App.vue'

import './styles'

new Vue({
  ...Config,
  ...App
}).$mount('#app')
