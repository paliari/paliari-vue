<template>
<div>
  Container for label and input
  <p>Properties</p>
  <ul>
    <li><b>icon</b> - <code>String</code> Icon label class. Ex: <code>fa fa-user</code></li>
    <li><b>label</b> - <code>String</code> Label for the input</li>
    <li><b>asterisk</b> - <code>Boolean</code> Show an asterisk after label if <code>true</code>. Used to indicates required inputs</li>
  </ul>
  Usage example
  <pre>&lt;input-container :icon="iconClass" :label="labalText" :asterisk="true"&gt;&lt;/input-container&gt;</pre>
</div>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
</style>
