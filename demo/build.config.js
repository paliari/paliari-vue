const path = require('path')

module.exports = (options, req) => ({
  html: {
    template: path.resolve(__dirname, './index.html')
  },
})
