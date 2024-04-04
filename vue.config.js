const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // pluginOptions: {
  //   "style-resources-loader": {
  //     preProcessor: 'less',
  //     patterns: [
  //       path.resolve(__dirname, "./src/assets/css/variables.less"),
  //     ]
  //   }
  // }
  lintOnSave: false,

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: []
    }
  }
})
