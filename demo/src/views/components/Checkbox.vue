<template>
<div>
  Properties
  <ul>
    <li><b>label</b> - You can use a <code>slot</code> or a <code>label</code> property</li>
    <li><b>name</b> - Custom name for the checkbox</li>
    <li><b>value</b> - Pass a value to the checkbox</li>
    <li><b>disabled</b> - To get a disabled checkbox</li>
    <li><b>trueValue</b> - Default: <code>true</code></li>
    <li><b>falseValue</b> - Default: <code>false</code></li>
  </ul>
  Usage example
  <pre>&lt;checkbox v-model='model'&gt;Check label&lt;/checkbox&gt;</pre>
  <checkbox v-model="model">Check example</checkbox>
  <checkbox v-model="model" :disabled='true'>Check disabled</checkbox>
  {{model}}
</div>
</template>

<script>
export default {
  data () {
    return {
      model: false
    }
  }
}
</script>

<style lang="stylus">
</style>
