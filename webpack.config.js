var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
     context: __dirname,
     entry: path.resolve(__dirname, 'src/index.jsx'),
     output: {
         path: path.resolve(__dirname, './dist'),
         filename: 'bundle.js'
     },
     resolve: {
         extensions: [".js", ".json", ".jsx"]
     },
     module: {
     loaders: [{
            test: /.jsx?$/,
            include: path.resolve(__dirname, './src'),
            exclude: /node_modules/,
            loader: 'babel-loader'
         }, {
            test: /\.css$/, loader: "style-loader!css-loader" 
         }
         ]
     },
     plugins: [
        new webpack.ProvidePlugin({
            "React": "react",
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html.template'
        })
     ],
 };
