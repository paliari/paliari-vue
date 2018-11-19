<template lang="pug">
div
  input.search-input(type="search", v-model='filter', placeholder='Search')
  hr
  div.components(v-for='c in Object.keys($options.components)', v-if='showComponent(c)')
    h2 {{c}}
    div(:is='c')
    hr
</template>

<script>
// Components
import CheckboxComponent from './views/components/Checkbox.vue'
import RadioComponent from './views/components/Radio.vue'
import IosSwitchComponent from './views/components/IosSwitch.vue'
import BackComponent from './views/components/Back.vue'
import SpinnerComponent from './views/components/Spinner.vue'
import ListManagerComponent from './views/components/ListManager.vue'
import LoadManagerComponent from './views/components/LoadManager.vue'
import InputContainerComponent from './views/components/InputContainer.vue'

// Directives
import BackgroundImageDirective from './views/directives/BackgroundImage.vue'
import TextBindDirective from './views/directives/TextBind.vue'

// Filters
import CurrencyFilter from './views/filters/Currency.vue'
import DateFilter from './views/filters/Date.vue'
import TruncateFilter from './views/filters/Truncate.vue'

// Other
import Masks from './views/other/Masks.vue'
import i18n from './views/other/i18n.vue'
import Dialog from './views/other/Dialog.vue'
import Modal from './views/other/Dialog.vue'
import VuexMapper from './views/other/VuexMapper.vue'

export default {
  components: {
    CheckboxComponent,
    RadioComponent,
    IosSwitchComponent,
    BackComponent,
    SpinnerComponent,
    ListManagerComponent,
    LoadManagerComponent,
    InputContainerComponent,

    BackgroundImageDirective,
    TextBindDirective,

    CurrencyFilter,
    DateFilter,
    TruncateFilter,

    Masks,
    i18n,
    Dialog,
    Modal,
    VuexMapper
  },
  methods: {
    showComponent(name) {
      return new RegExp(this.filter.toLowerCase()).test(name.toLowerCase())
    }
  },
  data() {
    return {
      filter: ''
    }
  }
}
</script>

<style src="./style.css"></style>
<style lang="stylus">
hr
  margin 50px 0 !important
.center
  text-align center
input
  line-height 1.8em
  padding 0.3rem 0.8rem
  border 1px solid #087B75
  border-radius 5px
  outline none
  width 100%
</style>
