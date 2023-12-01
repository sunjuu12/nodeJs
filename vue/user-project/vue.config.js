const { defineConfig } = require('@vue/cli-service')
const target = 'http://localhost:3300'

module.exports = defineConfig({
  transpileDependencies: true,
  devServer : {
    port : 8080,
    proxy : {
      '^/' : {
        target,
        changeOrigin : true
      }
    }
  }
})
