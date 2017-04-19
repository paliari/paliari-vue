<template>
<div>
  Truncate a string

  <pre>export default {
  data () {
    return {
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  }
}</pre>
  <pre>{{str}}  //Outputs -> Lorem ipsum dolor sit amet,...</pre>
  <p>Example:</p>
  <form class="pure-form">
    Truncate Length
    <input v-model='truncateLength'>
  </form>
  <p>{{text | truncate(truncateLength)}}</p>
</div>
</template>

<script>
export default {
  data () {
    return {
      truncateLength: 30,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      str: "<div>{{text | truncate}}</div>"
    }
  }
}
</script>

<style lang="stylus">
</style>
