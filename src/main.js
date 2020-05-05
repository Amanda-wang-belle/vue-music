import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
// import Vuex from 'vuex'


//axios是promise实现的http库，IE不支持，需要加上垫片，给IE做兼容性处理
import 'babel-polyfill'
// 在vue中实现rem布局：postcss-pxtorem+amfe-flexible实现移动端适配
import 'amfe-flexible'

// 第三方库
import { Toast, Indicator } from 'mint-ui'
import VueProgressBar from 'vue-progressbar'
// import VueProgressBar from 'vue-progressbar'

// 自定义
import '@/assets' //字体、样式
import '@/filters' //全局过滤器
import '@/mock'   //模拟数据


Vue.config.productionTip = false

// Vue.use(Vuex)
// 全局注册
Vue.component(Toast.name,Toast)
Vue.component(Indicator.name,Indicator)

// Vue.prototype.$Indicator = Indicator
// Vue.prototype.$Toast = Toast

Vue.use(VueProgressBar,{
	color: 'rgb(143, 255, 199)',
	failedColor: 'red',
	height: '2px'
})

// 全局错误捕捉，防止单页面卡死
if (process.env.NODE_ENV === 'production') {
    Vue.config.errorHandler = function (error, vm, info) {
        console.log(error)
        Toast(info)
    }
}
//关闭生产模式下给出的提示
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
