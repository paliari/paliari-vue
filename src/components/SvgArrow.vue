<template lang="pug">
svg(:style="style", xmlns="http://www.w3.org/2000/svg", :width="size", :height="size", viewBox="6 6 20 20")
  g(fill="none", :stroke="color", stroke-width="3.2", stroke-linejoin="round", stroke-miterlimit="10")
    path(d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98")
</template>

<script>
export default {
  props: {
    size: { type: Number, default: 30 },
    color: { type: String, default: '#2175FF' },
    rotate: { type: Number, default: 0 }
  },

  computed: {
    style() {
      return `transform: rotate(${this.rotate}deg);`
    }
  }
}
</script>
