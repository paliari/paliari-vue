<template lang="pug">
span.btn-back(@click="goBack" v-show="notHome")
  i.fa.fa-arrow-left.fa-lg(aria-hidden='true')
</template>

<script>
export default {
  computed: {
    notHome () {
      return this.$router ? this.$route.name != 'home' : false
    }
  },

  methods: {
    goBack () {
      if (this.$router) this.$router.back()
    }
  }
}
</script>

<style lang="stylus">
.btn-back
  padding 10px 0 10px
  .fa
    font-size 1.7em
</style>
