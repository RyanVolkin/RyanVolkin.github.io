const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'localhost'
  },
  publicPath: process.env.NODE_ENV === "production" ? "/RyanVolkin.github.io/" : "/",

})
