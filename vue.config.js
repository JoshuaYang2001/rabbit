const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        // // eslint-disable-next-line no-undef
        // path.join(__dirname, './src/assets/styles/variables.less'),
        // // eslint-disable-next-line no-undef
        // path.join(__dirname, './src/assets/styles/mixins.less')
      ]
    }
  }
})
