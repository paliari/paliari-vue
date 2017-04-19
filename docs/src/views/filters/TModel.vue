<template>
<div>
  i18n internacionalization for activerecord models and attributes
  <pre>{{str}}            //Outputs -> Usuário</pre>
  <pre>{{str1}}       //Outputs -> Nome</pre>
</div>
</template>

<script>
export default {
  data () {
    return {
      str: "<div>{{'usuario' | tModel}}</div>",
      str1: "<div>{{'usuario.name' | tModel}}</div>"
    }
  }
}
</script>

<style lang="stylus">
</style>
