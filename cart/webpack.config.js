const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8082
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'cart',
      filename: 'remoteEntry.js',
      //expose what to share from this project
      exposes: {
        './CartIndex': './src/index' //access path: actual path
      },
      /**
       * following resources added in shared, should be fetched only once while using it (say in container),
       * if we do not use shared, say faker library will be fetched in each project it is being used in. (say products and cart separately) 
      */
     shared: ['faker'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}
