const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8081
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'products',
      filename: 'remoteEntry.js',
      //expose what to share from this project
      exposes: {
        './ProductsIndex': './src/index' //access path: actual path
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}
