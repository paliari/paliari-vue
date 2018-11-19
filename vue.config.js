module.exports = {
  baseUrl: './',
  configureWebpack: config => {
    config.externals = {
      ...config.externals,
      vuex: 'vuex',
      fecha: 'fecha',
      'string-mask': 'string-mask',
      'paliari-js-utils': 'paliari-js-utils'
    }
  }
}
