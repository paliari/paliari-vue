<template>
<div>
  Show a formatted date
  <pre>export default {
  data () {
    return {
      myDate: '2017-03-01T11:54:56.856Z'
    }
  }
}</pre>
  <pre>{{str}}                     // Outputs -> 2017-03-01T11:54:56.856Z</pre>
  <pre>{{str2}}              // Outputs -> 01/03/17 11:54</pre>
  Alternatively you can pass a custom format
  <pre>{{str3}}  // Outputs -> 01/03/2017 11:54:56</pre>

  Available formats
  <ul>
    <li><b>default</b> = 'DD/MM/YYYY HH:mm:ss'</li>
    <li><b>date</b> = 'DD/MM/YYYY'</li>
    <li><b>time</b> = 'HH:mm:ss'</li>
    <li><b>dateTime</b> = 'DD/MM/YYYY HH:mm:ss'</li>
    <li><b>shortDate</b> = 'DD/MM/YY'</li>
    <li><b>shortTime</b> = 'HH:mm'</li>
    <li><b>shortDateTime</b> = 'DD/MM/YY HH:mm'</li>
    <li><b>json</b> = 'YYYY-MM-DDTHH:mm:ss'</li>
  </ul>
</div>
</template>

<script>
export default {
  data () {
    return {
      myDate: '2017-03-01T11:54:56.856Z',
      prefix: 'R$',
      str: '<div>{{myDate}}</div>',
      str2: '<div>{{myDate | date}}</div>',
      str3: '<div>{{myDate | date("dateTime")}}</div>'
    }
  }
}
</script>

<style lang="stylus">
</style>
