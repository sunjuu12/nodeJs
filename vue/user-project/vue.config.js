const { defineConfig } = require('@vue/cli-service')
const target = 'http://localhost:3300'

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave : false, // 컴포넌트 이름을 두 단어 이상으로 쓰면 안 써도 됨
  devServer : {
    port : 8080,
    proxy : {
      '^/api' : {
        target,
        changeOrigin : true,
        ws : false,
        pathRewrite : {'^/api' : '/'} // /api를 /로 바꾸는 코드
      }
    }
  }
})
