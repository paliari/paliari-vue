<template>
<div>
  Access an object deep property.

  <pre>export default {
  data () {
    return {
      level1: {
        level2: {
          level3: 'Teste'
        }
      }
    }
  }
}</pre>
  <pre>let a = this.level.level1.level2.level3                //Output: Teste</pre>
  <pre>let a = this.level.level1.level2.level3.level4.level5  //Error: Cannot read property 'level5' of undefined</pre>
  <p>With Deep Key:</p>
  <pre>let a = this.$util.deepKey(this.level1, 'level2.level3')               //Output: Teste</pre>
  <pre>let a = this.$util.deepKey(this.level1, 'level2.level3.level4.level5') //Output: undefined</pre>
</div>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
</style>
