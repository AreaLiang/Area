module.exports = {
	// pages: {
	// 	index: {
	// 		entry: "src/main.js"
	// 	}
	// },
	// 基本路径
	// publicPath: './',
	// // 输出文件目录
	// outputDir: 'dist',
	// assetsDir:'static',
	// lintOnSave: false,
	devServer: {
		proxy: {
			'/api': {
				target: 'http://localhost:5000',//跨域端口
				pathRewrite: {
					'^/api': ''
				}
			}
		}
	}
}
