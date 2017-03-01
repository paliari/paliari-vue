<template>
<div>
  Properties
  <ul>
    <li><b>name</b> - Custom name for the switch</li>
    <li><b>value</b> - Pass a value to the switch</li>
    <li><b>disabled</b> - To get a disabled switch</li>
    <li><b>trueValue</b> - Default: <code>true</code></li>
    <li><b>falseValue</b> - Default: <code>false</code></li>
  </ul>
  Usage example
  <pre>&lt;ios-switch :value="bindValue" :disabled="disabledBind" @input="someMethod"&gt;&lt;/ios-switch&gt;</pre>
  <div class="pure-g">
    <div class="pure-u-1-3">
      <ios-switch v-model="bindValue"></ios-switch>
      Normal example
    </div>
    <div class="pure-u-1-3">
      <ios-switch v-model="bindValue" :disabled='true'></ios-switch>
      Disabled example
    </div>
    <div class="pure-u-1-3">
      {{bindValue}}
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      bindValue: false
    }
  }
}
</script>

<style lang="stylus">
</style>
