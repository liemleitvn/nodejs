 var path = require('path');
 var webpack = require('webpack');

 module.exports = {
     entry: './js/app.js',
     output: {
         path: path.resolve(__dirname, 'dist'),
         filename: 'bundle.js',
		 publicPath: '/dist'
     },
	 module: {
		 rules: [
			{
				test: /\.js$/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["es2015"]
					}
				}
			},

		 ]
	}
 };
