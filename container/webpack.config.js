const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8080
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      //define remote projects we want to use in this app
      remotes: {
        /**
         * key => here key can be any string that will be used while importing remotes in this app
         * value => <moduleFederationPluginNameOfRemote@http://localhost:<devServerPortOfRemote>/<moduleFederationPluginFilenameOfRemote>
         */
        products: 'products@http://localhost:8081/remoteEntry.js',
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}
