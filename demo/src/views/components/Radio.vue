<template>
<div>
  Properties
  <ul>
    <li><b>label</b> - Label for the radio</li>
    <li><b>name</b> - Custom name for the radio</li>
    <li><b>val</b> - Pass a value to the radio</li>
    <li><b>disabled</b> - To get a disabled radio</li>
  </ul>
  Usage example
  <pre>&lt;radio class="gap" name="radio_name" val="1" v-model="bindModel" label="Um"&gt;&lt;/radio&gt;
&lt;radio class="gap" name="radio_name" val="2" v-model="bindModel" label="Dois"&gt;&lt;/radio&gt;</pre>
  <radio class="gap" name="radio_name" val="1" v-model="bindModel" label="Um"></radio>
  <radio class="gap" name="radio_name" val="2" v-model="bindModel" label="Dois"></radio>
  <radio class="gap" name="radio_name" val="3" v-model="bindModel" label="Tres"></radio>
  <radio class="gap" name="radio_name" val="4" v-model="bindModel" label="Quatro - disabled" :disabled="true"></radio>
  <radio class="gap" name="radio_name" val="5" v-model="bindModel" label="Cinco"></radio>
  {{bindModel}}
</div>
</template>

<script>
export default {
  data () {
    return {
      bindModel: 1
    }
  }
}
</script>

<style lang="stylus">
</style>
