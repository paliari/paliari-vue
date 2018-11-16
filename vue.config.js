module.exports = {
  configureWebpack: config => {
    config.externals = {
      ...config.externals,
      vuex: 'vuex',
      'string-mask': 'string-mask',
      fecha: 'fecha'
    }
  }
}
