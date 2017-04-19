<template>
<div>
  Used to show a human label of an object property

  <pre>export default {
  data () {
    return {
      cidade: {uf: 'PR'}
    }
  }
}</pre>

  <pre>{{str}}   //Outputs -> Paraná</pre>

  <b>Warn: </b> You must have set the labels in the i18n json:
  <pre>{
  "enums": {
    "cidades": {
      "uf": {
        "PR": "Paraná"
      }
    }
  }
}</pre>

</div>
</template>

<script>
export default {
  data () {
    return {
      cidade: {uf: 'PR'},
      str: "<div>{{cidade | enums('cidades.uf')}}</div>"
    }
  }
}
</script>

<style lang="stylus">
</style>
