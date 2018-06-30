const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.export = {
	mode: 'development',
	entry: ['./index.js', './src/main.scss'],
	output: {
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [{
			test: /\.scss$/,
			use: [
				"style-loader",
				"css-loader",
				"sass-loader"
			]
		}]
	},
	plugins: [
		new MiniCssExtractPlugin()
	]
};
