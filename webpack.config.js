// https://blog.mnishiguchi.com/setting-up-webpack-for-jekyll
const path = require('path');

// https://webpack.js.org/configuration/
module.exports = {
	entry: {
	main: path.join(__dirname, '_webpack', 'main.js'),
	},
    output: {
	path: path.resolve(__dirname, 'static', 'js'),
	filename: '[name]-bundle.js',
    },
    resolve: {
	extensions: ['.json', '.js', '.jsx'],
	modules: ['node_modules'],
    },
    module: {
	rules: [
	    { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
	    {
		test: /\.(sa|sc|c)ss$/i,
		use: [
		    {
			loader: 'style-loader',
		    },
		    {
			loader: 'css-loader',
			options: {
			    importLoaders: 1, // https://webpack.js.org/loaders/postcss-loader/
			},
		    },
		    {
			loader: 'sass-loader'
		    },
		],
	    },
	],
    },
};
