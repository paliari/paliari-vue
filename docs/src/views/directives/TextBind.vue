<template>
<div>
  Bind some content to a html tag
  <pre>export default {
  data () {
    return {
      myProp: 'Orange'
    }
  }
}</pre>
  <pre>{{str}}            //Outputs -> Orange</pre>
</div>
</template>

<script>
export default {
  data () {
    return {
      str: '<div v-text-bind="\'myProp\'"></div>',
      str2: '<div v-t-model="\'usuario.name\'"></div>'
    }
  }
}
</script>

<style lang="stylus">
</style>
