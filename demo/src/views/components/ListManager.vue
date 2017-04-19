<template>
<div>
  Used to show a list when status is <code>success</code> and got itens, or a <i>No records found</i> message when the status is <code>success</code> and the list size is <i>zero</i>
  <p>Properties</p>
  <ul>
    <li><b>status</b> - Status can be <code>loading | success | failure</code></li>
    <li><b>count</b> - Number with a list count</li>
  </ul>
  Usage example
  <pre>&lt;list-manager :status="statusBind" :count="myList.length"&gt;Some html content&lt;/list-manager&gt;</pre>
  <div class="pure-g">
    <div class="pure-u-1-5">
      <radio class="gap" name="radio_count" :val="0" v-model="countBind" label="Empty list"></radio>
    </div>
    <div class="pure-u-1-5">
      <radio class="gap" name="radio_count" :val="2" v-model="countBind" label="List not empty"></radio>
    </div>
  </div>
  <div class="list-manager-demo">
    <list-manager status="success" :count="countBind">
      <h3 class="center">Some html content</h3>
    </list-manager>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      countBind: 0
    }
  }
}
</script>

<style lang="stylus">
.list-manager-demo
  margin-top 30px
  position relative
  .table
    background-color darken(#fff, 5%)
    position static
    height 300px
    width 50vw
    color gray
</style>
