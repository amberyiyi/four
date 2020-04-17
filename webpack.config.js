const path = require('path');
const webpack=require('webpack');

module.exports = {
  entry: {
    index:'./src/index.js'
  },
  mode:'development',
  output: {
    filename: 'js/[name].min.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
      rules: [
       {
         test: /\.(png|svg|jpg|gif)$/,
         use: [{
            loader:'file-loader',
            options: {
                outputPath: './img',
                publicPath: './img'
              }
         }]
       },
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       },
       {
         test:/\.js|.jsx$/,
         use:'babel-loader',
         exclude:/node_modules/
       }
      ]
    },
    devServer: {
     contentBase: './dist',
     port:3030
   },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.jQuery":"jquery"
          })
      ]
};