<template lang="pug">
.paliari-vue-load-manager
  slot(v-if="success")
  div.gray-lighter.layout-table(v-else)
    .layout-table-cell
      spinner(:loading="loading")
      div(v-if='failure')
        i.fa.fa-4x.fa-exclamation-circle
        h3 Falha ao carregar dados
</template>

<script>
import Spinner from './Spinner'
export default {
  components: {Spinner},
  props: {
    status: {
      type: String,
      required: true
    }
  },
  computed: {
    loading () {
      return this.status == 'loading'
    },
    success () {
      return this.status == 'success'
    },
    failure () {
      return this.status == 'failure'
    }
  }
}
</script>

<style lang="stylus">
.paliari-vue-load-manager
  .layout-table
    display table
    width 100%
    height calc(100vh - 50px)
    z-index -1
    top 50px
  .layout-table-cell
    display table-cell
    text-align center
    vertical-align middle
</style>
