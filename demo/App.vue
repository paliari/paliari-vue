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
import ModalComponent from './views/components/Modal.vue'
import SpinnerComponent from './views/components/Spinner.vue'
import ListManagerComponent from './views/components/ListManager.vue'
import LoadManagerComponent from './views/components/LoadManager.vue'

// Directives
import BackgroundImageDirective from './views/directives/BackgroundImage.vue'
import DeepKeyDirective from './views/directives/DeepKey.vue'
import TextBindDirective from './views/directives/TextBind.vue'
import TModelDirective from './views/directives/TModel.vue'
import TranslateDirective from './views/directives/Translate.vue'

// Filters
import CurrencyFilter from './views/filters/Currency.vue'
import DateFilter from './views/filters/Date.vue'
import DeepKeyFilter from './views/filters/DeepKey.vue'
import EnumsFilter from './views/filters/Enums.vue'
import MasksFilter from './views/filters/Masks.vue'
import TModelFilter from './views/filters/TModel.vue'
import TranslateFilter from './views/filters/Translate.vue'
import TruncateFilter from './views/filters/Truncate.vue'

// Utils
import DeepCloneUtil from './views/utils/DeepClone.vue'
import DeepKeyUtil from './views/utils/DeepKey.vue'
import I18nUtil from './views/utils/I18n.vue'
import IsDateUtil from './views/utils/IsDate.vue'
import MasksUtil from './views/utils/Masks.vue'
import UcFirstUtil from './views/utils/UcFirst.vue'

export default {
  components: {
    CheckboxComponent,
    RadioComponent,
    IosSwitchComponent,
    BackComponent,
    ModalComponent,
    SpinnerComponent,
    ListManagerComponent,
    LoadManagerComponent,

    BackgroundImageDirective,
    DeepKeyDirective,
    TextBindDirective,
    TModelDirective,
    TranslateDirective,

    CurrencyFilter,
    DateFilter,
    DeepKeyFilter,
    EnumsFilter,
    MasksFilter,
    TModelFilter,
    TranslateFilter,
    TruncateFilter,

    DeepCloneUtil,
    DeepKeyUtil,
    I18nUtil,
    IsDateUtil,
    MasksUtil,
    UcFirstUtil
  },
  methods: {
    showComponent (name) {
      return (new RegExp(this.filter.toLowerCase())).test(name.toLowerCase())
    }
  },
  data () {
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
