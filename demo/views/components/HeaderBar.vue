<template>
<div>
  <p>Properties</p>
  <ul>
    <li><b>custom-title</b> - Title for the HeaderBar</li>
    <li><b>color</b> - Text color for the items</li>
    <li><b>background-color</b> Background color for the HeaderBar</li>
  </ul>
  Usage example
  <pre>&lt;header-bar :custom-title="myTitle"&gt;
  &lt;div slot="left"&gt;Left&lt;/div&gt;
  &lt;div slot="right"&gt;Right&lt;/div&gt;
&lt;/header-bar&gt;</pre>
  <header-bar custom-title="HeaderBar title">
    <div slot='left'>Left</div>
    <div slot='right'>Right</div>
  </header-bar>
</div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar.vue'
export default {
  components: { HeaderBar }
}
</script>

<style lang="stylus">
</style>
