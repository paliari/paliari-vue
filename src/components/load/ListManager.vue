<template lang="pug">
.paliari-vue-list-manager
  slot(v-if="recordsFound")
  div.gray-lighter.table(v-else)
    .table-cell
      i.fa.fa-4x.fa-list-ul
      h3 Nenhum registro encontrado
</template>

<script>
export default {
  props: {
    status: {
      type: String,
      required: true
    },
    count: {
      type: Number,
      required: true
    }
  },
  computed: {
    recordsFound () {
      return this.status == 'success' && this.count > 0
    }
  }
}
</script>

<style lang="stylus" scoped>
.paliari-vue-list-manager
  .table
    display table
    width 100%
    height calc(100vh - 50px)
    z-index -1
    top 50px
  .table-cell
    display table-cell
    text-align center
    vertical-align middle
</style>
