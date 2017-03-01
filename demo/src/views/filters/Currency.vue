<template>
<div>
  Show a Number in currency format
  <pre>export default {
  data () {
    return {
      amount: 35.6
    }
  }
}</pre>
  <pre>{{str}}                     // Outputs -> 35.6</pre>
  <pre>{{str2}}          // Outputs -> R$35,60</pre>
  Alternatively you can pass a prefix
  <pre>{{str3}}     // Outputs -> $35,60</pre>
  <form class="pure-form">
    <span>Prefix</span>
    <input type="text" v-model="prefix">
    <span>Amount</span>
    <input type="tel" v-model="amount">
    {{amount | currency(prefix)}}
  </form>
</div>
</template>

<script>
export default {
  data () {
    return {
      amount: 35.6,
      prefix: 'R$',
      str: '<div>{{amount}}</div>',
      str2: '<div>{{amount | currency}}</div>',
      str3: '<div>{{amount | currency("$")}}</div>'
    }
  }
}
</script>

<style lang="stylus">
</style>
