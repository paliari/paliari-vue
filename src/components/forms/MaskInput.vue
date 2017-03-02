<template lang="pug">
input(v-model='model', :maxlength='maskSize')
</template>

<script>
export default {
  props: {
    value: null,
    mask: String,
    disabled: Boolean,
  },
  computed: {
    maskSize () {
      return this.$util.masks.size(this.mask, true)
    },
    valueSize () {
      return this.$util.masks.size(this.mask)
    },
    model: {
      get () {
        if (this.$util.masks[this.mask]) {
          return this.$util.masks[this.mask](this.value)
        }
        return this.$util.masks.default(this.value, this.mask)
      },
      set (newModel) {
        newModel = this.$util.masks.clear(newModel)
        this.$emit('input', newModel.substr(0, this.valueSize))
      }
    }
  }
}
</script>
