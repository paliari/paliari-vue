const webpack = require.main.require('webpack')

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.IP_LOCAL': JSON.stringify(process.env.IP_LOCAL || '0.0.0.0')
    })
  ]
}
