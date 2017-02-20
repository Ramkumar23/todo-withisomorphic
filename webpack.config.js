const webpack = require('webpack');
const path = require('path');
const plugins = require('webpack-load-plugins')();
module.exports = {
   devtool : 'inline-source-map',
   entry : path.join(__dirname,'src','app-client.js'),
   output : {
      path : path.join(__dirname,'src','static','js'),
      filename : 'bundle.js'
   },
   modules : {
      loaders : [{
            test : path.join(__dirname,'src'),
            exclude: /node_modules/,
            loader : ['react-hot-loader', 'babel-loader?presets[]=react,presets[]=es2015'],
            query : {
               cacheDirectory : 'babel_cache',
               presets:['react','es2015']
            }
      }]
   },
   plugins : [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
         compress : { warnings : false},
         mangle :true,
         source : false,
         beautify : false,
         dead_code : true
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
   ]
};
