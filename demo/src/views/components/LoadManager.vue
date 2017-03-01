<template>
<div>
  Used to show an spinner when status is <code>loading</code>, an error message when the status is
  <code>failure</code> or the content when status is <code>success</code><br>
  Properties
  <ul>
    <li><b>status</b> - Status can be <code>loading | success | failure</code></li>
  </ul>
  Usage example
  <pre>&lt;load-manager :status="statusBind"&gt;Some html content&lt;/load-manager&gt;</pre>
  <div class="pure-g">
    <div class="pure-u-1-3">
      <radio class="gap" name="radio_name" val="loading" v-model="statusBind" label="Loading"></radio>
    </div>
    <div class="pure-u-1-3">
      <radio class="gap" name="radio_name" val="success" v-model="statusBind" label="Success"></radio>
    </div>
    <div class="pure-u-1-3">
      <radio class="gap" name="radio_name" val="failure" v-model="statusBind" label="Failure"></radio>
    </div>
  </div>
  <div class="load-manager-demo">
    <load-manager :status="statusBind">
      <h3 class="center">Some html content</h3>
    </load-manager>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      statusBind: 'loading'
    }
  }
}
</script>

<style lang="stylus">
.load-manager-demo
  position relative
  margin-top 30px
  .table
    background-color darken(#fff, 5%)
    position static
    height 300px
    width 50vw
    color gray
</style>
