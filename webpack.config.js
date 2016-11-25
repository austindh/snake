const webpack = require( 'webpack' );
//const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const path = require( 'path' );

const BUILD_DIR = path.resolve( __dirname, 'public/' );
const APP_DIR = path.resolve( __dirname, 'src/js/' );
//const CSS_DIR = path.resolve( __dirname, 'scss/' );

let config = {

	entry: [
		// For hot style updates
//		'webpack/hot/dev-server',

		// The script refreshing the browser on none hot updates
//		'webpack-dev-server/client?http://localhost:8081',
		APP_DIR + '/client.jsx'
	],

	output: {
		path: BUILD_DIR,
		filename: 'bundle.js',
		publicPath: '/build/'
	},

	module: {
		loaders: [
			{
				test: /\.jsx?/,
				include: APP_DIR,
				loader: 'babel'
			},
//			{
//				test: /\.scss$/,
//				include: CSS_DIR,
//				loader: ExtractTextPlugin.extract( 'css!sass' )
//			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'file-loader?name=fonts/[name].[ext]'
			}
		]

	},

	plugins: [
//		new ExtractTextPlugin( 'style.css', {
//			allChunks: true
//		}),
//		new webpack.HotModuleReplacementPlugin()
	],

//	devServer: { inline: true, port: 8081 },

	devtool: '#source-map'

};

module.exports = config;
