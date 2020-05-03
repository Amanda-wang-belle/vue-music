import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'


//axios是promise实现的http库，IE不支持，需要加上垫片，给IE做兼容性处理
import 'babel-polyfill'
// 在vue中实现rem布局：postcss-pxtorem+amfe-flexible实现移动端适配
import 'amfe-flexible'

// 自定义
import '@/assets' //字体、样式
import '@/filters' //全局过滤器
import '@/mock'   //模拟数据


Vue.config.productionTip = false

Vue.use(Vuex)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
