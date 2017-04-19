<template>
<div>
  Used to access a DeepKey in some object. Example:
  <pre>//Javascript
var level1 = {level2: {level3: 'Hello'}}

//Html
{{str}}

//Outputs -> Hello</pre>

  <pre>//Javascript
var level1 = undefined

//Html
{{str}}

//Outputs -> Cannot read property 'level2' of undefined</pre>

But using DeepKey, we not have problem if a variable is undefined or not.
  <pre>{{str2}}</pre>
</div>
</template>

<script>
export default {
  data () {
    return {
      str: '<div>{{level1.level2.level3}}</div>',
      str2: '<div v-deep-key="level1" key="level2.level3"></div>'
    }
  }
}
</script>

<style lang="stylus">
</style>
