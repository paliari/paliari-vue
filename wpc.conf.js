module.exports = ({argv}) => ({
  output: {
    library: 'PaliariVue',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  entry: {
    "paliari-vue": "./src/index.js"
  },
  externals: ['vue', 'vuex', 'string-mask', 'fecha']
})
