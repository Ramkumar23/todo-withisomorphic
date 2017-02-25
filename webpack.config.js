const webpack = require('webpack');
  const path = require('path');

const styleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'app-client.js'),
  output: {
    path: path.join(__dirname, 'src', 'static', 'js'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: path.join(__dirname, 'src'),
      loader: ['babel-loader'],
      query: {
        cacheDirectory: 'babel_cache',
        presets: ['react', 'es2015']
      }
    },
    {
      test: /\.js$/,
      loader:'eslint-loader',
   },
    {
     test: /\.s(a|c)ss$/,
     loader: 'stylelint'
   }
 ]},
  eslint: {
  configFile: './.eslintrc' ,
},
stylelint: {
    configFile:  './.stylelintrc',
},
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    }),
    new styleLintPlugin({
       configFile: '.stylelintrc',
       context: 'src',
       files: '**/*.css',
       failOnError: false,
       quiet: false,
     })
  ]
};
