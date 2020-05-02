import Vue from 'vue'
import App from './App.vue'
import router from './router'

//axios是promise实现的http库，IE不支持，需要加上垫片，给IE做兼容性处理
import 'babel-polyfill'
// 在vue中实现rem布局：postcss-pxtorem+amfe-flexible实现移动端适配

import 'amfe-flexible'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
