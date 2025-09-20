// https://blog.mnishiguchi.com/setting-up-webpack-for-jekyll
const path = require('path');

// https://webpack.js.org/configuration/
module.exports = {
    entry: {
	main: path.join(__dirname, '_webpack', 'main'),
    },
    output: {
	path: path.resolve(__dirname, 'assets', 'js'),
	filename: '[name]-bundle.js',
    },
    resolve: {
	extensions: ['.json', '.js', '.jsx'],
	modules: ['node_modules'],
    },
    // optimization: {
    //   minimizer: [
    //     new UglifyJsPlugin({
    //       cache: true,
    //       parallel: true,
    //       sourceMap: true, // set to true if you want JS source maps
    //     }),
    //   ],
    // },
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
		    // {
		    // 	loader: 'postcss-loader',
		    // 	options: {
		    // 	    postcssOptions: {
		    // 		plugins:  [
		    // 		    require('cssnano')(), // https://cssnano.co/
		    // 		]
		    // 	    },
		    // 	},
		    // },
		    {
			loader: 'sass-loader'
		    },
		],
	    },
	],
    },
};
