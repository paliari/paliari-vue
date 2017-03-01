<template>
<div>
  Upper case the first of string
  <pre>this.$util.masks.phone('44999887766')  //Output: (44) 99988-7766 </pre>
  <pre>let pattern = '9.990,00'
this.$util.masks.default(this.$util.masks.clear('1234.56'), pattern)  //Output: 1.234,56 </pre>
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
  created () {
    console.log(this.$util.masks.default(this.$util.masks.clear('1234.56'), '9.990,00'));
  }
}
</script>

<style lang="stylus">
</style>
