//vue.config.js
const TransformPages = require('uni-read-pages')
const {webpack} = new TransformPages()
module.exports = {
	configureWebpack: {
		plugins: [
			new webpack.DefinePlugin({
				ROUTES: webpack.DefinePlugin.runtimeValue(() => {
					const tfPages = new TransformPages({
						includes: ['path', 'name','meta', 'aliasPath']
					});
					return JSON.stringify(tfPages.routes)
				}, true)
			})
		]
	},
	devServer: {
		proxy: {
			'/api': {
				target: 'http://localhost:5000', //跨域端口
				pathRewrite: {
					'^/api': ''
				}
			}
		}
	}
}
