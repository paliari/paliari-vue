<template lang="pug">
input(v-model='model', :maxlength='$util.masks.size(mask, true)')
</template>

<script>
export default {
  props: {
    value: null,
    mask: String,
    disabled: Boolean,
  },
  computed: {
    model: {
      get () {
        if (this.$util.masks[this.mask]) {
          return this.$util.masks[this.mask](this.value)
        }
        return this.$util.masks.default(this.value)
      },
      set (newModel) {
        newModel = this.$util.masks.clear(newModel)
        newModel = newModel.substr(0, this.$util.masks.size(this.mask))
        this.$emit('input', newModel)
      }
    }
  }
}
</script>
