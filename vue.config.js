const path = require('path')

function resolve(dir) {
	/* 这个接口的作用就相当于在shell命令下，从左到右运行一遍cd path命令，
	最终获取的绝对路径/文件名，就是这个接口所返回的结果了。 */
	return path.join(__dirname,dir)
}

const projectName = require('./package.json').name

module.exports = {
	// 如果部署项目时不是根目录，请参照官网修改publicPath值
	// https://cli.vuejs.org/zh/config/#publicpath
	publicPath: '/',
	//当运行 vue-cli-service build 时生成的生产环境构建文件的目录
	outputDir: 'dist',
	// eslint-loader 是否在保存的时候检查 安装@vue/cli-plugin-eslint有效
	//是否开启 eslint 保存检测，有效值:true||false||'error'
	lintOnSave: true,
	// 是否为生产环境构建生成 source map
	productionSourceMap:false,
	css: {
		sourceMap: false, //是否开启 CSS source map
		modules: false, //  //为所有的 CSS 及其预处理文件开启 CSS Modules,不会影响 `*.vue` 文件
		loaderOptions: { //预处理器的 loader 传递自定义选项
			stylus: { //给stylus-loader 传递选项
				import: [path.resolve(__dirname,'./src/assets/css')+'/index.styl']
			},
			postcss: {
				plugins: [
				  require('postcss-pxtorem')({ // 把px单位换算成rem单位
					rootValue: 37.5, // vant官方使用的是37.5
					selectorBlackList: ['vant', 'mu'], // 忽略转换正则匹配项
					propList: ['*']
				  })
				]
			}
		}
	},
	devServer: {
		open: true,  // 编译完成是否自动打开浏览器预览
		port: 8001
	},
	configureWebpack: {
		name: projectName,
		resolve: {
			alias: {
				'@':resolve('src')
			}
		}
	}
	
}