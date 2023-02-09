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
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}
