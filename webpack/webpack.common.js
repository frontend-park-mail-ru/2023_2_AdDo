const defines = require('./webpack-defines');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkBoxWebpackPlugin = require('workbox-webpack-plugin');
const JsonMinimizerPlugin = require('json-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');


module.exports = {
	mode: 'production',
	entry: {
		app: `${defines.src}/index.ts`
	},
	output: {
		path: defines.dist,
		publicPath: '/',
		filename: `${defines.assets}js/[name]-[hash].js`
	},

	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000
	},

	optimization: {
		chunkIds: 'named',
		mergeDuplicateChunks: true,
		minimize: true,
		minimizer: [
			new JsonMinimizerPlugin(),
			new TerserPlugin(),
			new CssMinimizerPlugin({
				minimizerOptions: {
					preset: [
						'default',
						{
							discardComments: { removeAll: true }
						}
					]
				}
			})
		],
		splitChunks: {
			chunks: 'async',
			minSize: 20000,
			minRemainingSize: 0,
			minChunks: 1,
			maxAsyncRequests: 30,
			maxInitialRequests: 30,
			enforceSizeThreshold: 50000,
			cacheGroups: {
				defaultVendors: {
					name: 'vendors', 
					chunks: 'all',
					test: /[\\/]node_modules[\\/]|[\\/]ui-kit[\\/]/,
					priority: -10,
					reuseExistingChunk: true
				},
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true
				}
			}
		}
	},
	module: {
		rules: [
			// js(x) & ts(x)
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				}
			},

			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},

			{
				test: /\.hbs/,
				loader: 'handlebars-loader',
				exclude: /(node_modules|bower_components)/
			},
			// sass & css
			{
				test: /css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							url: false
						}
					}
					,
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [
									[
										'postcss-preset-env',
									]
								],
								postcssOptions: {
									parser: 'postcss-js'
								},
								execute: true
							}
						}
					},
				]
			},

			{
				test: /\.svg$/i,
				issuer: /\.[jt]sx?$/,
				use: [
					'@svgr/webpack'
				]
			},

			{
				test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]'
				}
			},

			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: 'asset/resource'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'My app',
			template: defines.public + '/index.html',
			filename: 'index.html' 
		}),

		new MiniCssExtractPlugin({
			filename: `${defines.assets}css/[name]-[hash].css`,
			chunkFilename: '[id].css'
		}),

		new WorkBoxWebpackPlugin.InjectManifest({
			swSrc: `${defines.src}/src-sw.js`,
			swDest: 'sw.js',
		}),

		new CopyWebpackPlugin({
			patterns: [
				{
					from: `${defines.src}/shared/images`,
					to: `${defines.dist}/${defines.static}/img`
				},

        {
          from: `${defines.src}/shared/misc`,
          to: `${defines.dist}`
        },

        {
          from: `${defines.src}/shared/manifest/webmanifest.json`,
          to: `${defines.dist}`
        }
      ]
    })
  ],

	resolve: {
		alias: {
		},
		extensions: ['.ts', '.tsx', '.js', '.jsx']
	}
};
