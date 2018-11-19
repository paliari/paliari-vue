<template lang="pug">
div
  paginator(:page='page', :pages='pages' @prev-page='prevPage' @next-page='nextPage' color='green')
  div Usage (pug)
  pre paginator(:page='page', :pages='pages' @prev-page='prevPage' @next-page='nextPage' color='green')
</template>

<script>
import Paginator from '@/components/Paginator.vue'
export default {
  components: { Paginator },
  data() {
    return { page: 1, pages: 5 }
  },

  methods: {
    prevPage() {
      --this.page
    },
    nextPage() {
      ++this.page
    }
  }
}
</script>

