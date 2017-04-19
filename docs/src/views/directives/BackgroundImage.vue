<template>
<div>
  Add a background image to an element
  <pre>{{str}}</pre>
  <div class="pure-form">
    Url:
    <input class="pure-u-1-1" type="text" v-model='url'>
  </div>
  <div class="thumb" v-background-image="url"></div>
</div>
</template>

<script>
export default {
  data () {
    return {
      url: 'https://avatars0.githubusercontent.com/u/2801041',
      str: "<div class=\"thumb\" v-background-image=\"url\">"
    }
  }
}
</script>

<style lang="stylus">
.thumb
  margin-top 10px
  height 150px
  width 150px
  background-color silver
  border-radius 10px
</style>
