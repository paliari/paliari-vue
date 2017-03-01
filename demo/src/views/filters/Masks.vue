<template>
<div>
  Mask a string
  <pre>{{str}}  //Outputs: (44) 99988-7766</pre>
  <form class="pure-form">
    <div class="pure-g">
      <div class="pure-u-1-3">
        <input v-model="value" maxlength="50">
      </div>
      <div class="pure-u-1-3">
        <select v-model="mask">
          <option value="cep">Cep</option>
          <option value="cpf">Cpf</option>
          <option value="cnpj">Cnpj</option>
          <option value="cpfCnpj">Cpf/Cnpj</option>
          <option value="phone">Phone</option>
          <option value="placa">Placa</option>
        </select>
      </div>
      <div class="pure-u-1-3">
        {{masked}}
      </div>
    </div>
  </form>
  <p>Available masks:</p>
  <ul>
    <li><b>cep:</b> <i>00.000-000</i></li>
    <li><b>cpf:</b> <i>000.000.000-00</i></li>
    <li><b>cnpj:</b> <i>00.000.000/0000-00</i></li>
    <li><b>cpfCnpj:</b> <i>000.000.000-00 | 00.000.000/0000-00</i></li>
    <li><b>phone:</b> <i>(00) 90000-0000</i></li>
    <li><b>placa:</b> <i>UUU-0000</i></li>
  </ul>
  Some doubts about patterns, see: <a href="https://github.com/the-darc/string-mask" target="_blank">String Mask</a>
</div>
</template>

<script>
export default {
  data () {
    return {
      value: '44999887766',
      mask: 'phone',
      str: "<div>{{'44999887766' | phone}}</div>"
    }
  },
  computed: {
    masked () {
      return this.$util.masks[this.mask](this.value)
    }
  }
}
</script>

<style lang="stylus">
</style>
