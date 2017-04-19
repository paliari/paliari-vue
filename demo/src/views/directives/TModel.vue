<template>
<div>
  i18n internacionalization for activerecord models and attributes
  <pre>{{str}}            //Outputs -> Usuário</pre>
  <pre>{{str2}}       //Outputs -> Nome</pre>
</div>
</template>

<script>
export default {
  data () {
    return {
      str: '<div v-t-model="\'usuario\'"></div>',
      str2: '<div v-t-model="\'usuario.name\'"></div>'
    }
  }
}
</script>

<style lang="stylus">
</style>
