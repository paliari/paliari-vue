<template>
<div>
  Used to access a DeepKey in some object. Example:

  <pre>export default {
  data () {
    return {
      level1: {level2: {level3: 'Hello'}}
    }
  }
}</pre>


  <pre>{{str}}                //Outputs -> Hello</pre>

  <pre>{{str1}}  //Error -> Cannot read property 'level5' of undefined</pre>

But using DeepKey, we not have problem if a variable is undefined or not.
  <pre>{{str2}}                //Outputs -> Hello</pre>
  <pre>{{str3}}  //Outputs -> ''</pre>
</div>
</template>

<script>
export default {
  data () {
    return {
      level1: {level2: {level3: 'Hello'}},
      str: '<div>{{level1.level2.level3}}</div>',
      str1: '<div>{{level1.level2.level3.level4.level5}}</div>',
      str2: "<div>{{level1 | deepKey('level2.level3')}}</div>",
      str3: "<div>{{level1 | deepKey('level2.level3.level4.level5')}}</div>"
    }
  }
}
</script>

<style lang="stylus">
</style>
