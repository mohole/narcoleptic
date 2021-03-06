var path = require('path');
module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devtool: 'source-map',
	module: {
		rules: [
		{
			test: /\.js?$/,
			exclude: ['node_modules', 'dist/bundle.js'],
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			}
		}]
	}
}
