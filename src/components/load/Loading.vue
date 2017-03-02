<template lang="pug">
.loading(v-if='loading')
  .table-cell
    spinner
</template>

<script>
import Spinner from './Spinner'

export default {
  components: {Spinner},
  props: {
    loading: Boolean
  }
}
</script>

<style lang="stylus" scoped>
.loading
  background-color rgba(0, 0, 0, .4)
  display table
  position fixed
  z-index 1000
  top 50px
  height calc(100vh - 50px)
  width 100%
  .table-cell
    display table-cell
    text-align center
    vertical-align middle
    z-index 1001
</style>
