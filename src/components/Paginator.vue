<template lang="pug">
.paginator
  span(@click='prevPage' :disabled='1 == page || loading')
    svg-arrow(:rotate='180' :color='color' )
  span.label(:style='labelStyle') {{page}} de {{pages}}
  span(@click='nextPage' :disabled='page == pages || loading')
    svg-arrow(:color='color')
</template>

<script>
import SvgArrow from './SvgArrow'
export default {
  components: { SvgArrow },
  props: {
    page: Number,
    pages: Number,
    loading: Boolean,
    color: { type: String, default: '#2175FF' }
  },

  computed: {
    labelStyle() {
      return `color: ${this.color};`
    }
  },

  methods: {
    prevPage() {
      if (this.page > 1) {
        this.$emit('prev-page')
      }
    },

    nextPage() {
      if (this.pages > this.page) {
        this.$emit('next-page')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.paginator
  user-select none
  display flex
  justify-content flex-end
  align-items center
.label
  padding 0 5px
span
  line-height 0
  cursor pointer
  &[disabled]
    cursor not-allowed
    opacity .5
</style>
