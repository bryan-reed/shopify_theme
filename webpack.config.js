var path = require('path'),
webpack = require('webpack');
module.exports = {
	mode: 'development',
	plugins: [
        new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
       })
    ],
	entry: {
		App: "./app/assets/scripts/App.js",
		Vendor: "./app/assets/scripts/Vendor.js"
	},
	output: {
		path: path.resolve(__dirname, "./app/dist/scripts"),
		filename: "[name].js"
	},
	module: {
		rules: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				},
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	}
}