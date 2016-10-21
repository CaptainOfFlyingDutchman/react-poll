var webpack = require('webpack');
var path = require('path');

module.exports = {
	devtool: "#source-map",
	entry: [
		'webpack-hot-middleware/client',
		'./app-client.js'
	],
	output: {
		path: path.resolve('public'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.OccurrenceOrderPlugin()
	],
	module: {
		loaders: [
			{
				test: /.js$/,
				exclude: /(node_modules)|app-server.js/,
				loader: 'babel-loader'
			}
		]
	}
};