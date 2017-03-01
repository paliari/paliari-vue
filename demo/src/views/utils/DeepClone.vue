<template>
<div>
  Clone a deep object
  <p>Inside a component</p>
  <pre>this.$util.deepClone(this.obj)</pre>
  <p>Standalone</p>
  <pre>import Vue from 'vue'
Vue.util.deepClone(obj)</pre>
  <form class="pure-form">
    <input v-model="level.level1.level2.level3">
    <button class="pure-button" @click="clone">Clone Object</button>
  </form>
  <br>
  <div class="pure-g">
    <div class="pure-u-1-2">
      Original Object
      <pre class="pure-u-22-24">{{level}}</pre>
    </div>
    <div class="pure-u-1-2">
      Cloned Object
      <pre class="pure-u-22-24">{{levelCloned}}</pre>
    </div>
  </div>

</div>
</template>

<script>
export default {
  data () {
    return {
      levelCloned: {},
      level: {
        level1: {
          level2: {
            level3: 'Teste'
          }
        }
      }
    }
  },
  methods: {
    clone () {
      this.levelCloned = this.$util.deepClone(this.level)
    }
  }
}
</script>

<style lang="stylus">
</style>
