const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: ['./src/js/main.js'],
	output:{
		path:path.resolve(__dirname, 'dist'),
		filename: 'js/bundle.js'
	},
	devServer:{ //where live reloading
		contentBase: './dist'
	},
	plugins:[
		new HtmlWebpackPlugin({
		inject: 'body',
		filename: 'index.html',
		template: './src/index.html'
		})
	],
	module:{
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}	
			},
      {
        test: /\.scss$/,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader'
        ]
      }
		]
	},

	 resolve: {
        extensions: ['.js', '.jsx', '.scss'],
        modules: [
          'node_modules'
        ]        
    }

};