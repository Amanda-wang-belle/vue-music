# vue-music
1、axios在vue-cli项目中的封装
axios是一个promise实现的http库，符合最新的ES规范，主要用于：
从浏览器中创建 XMLHttpRequests
从 node.js 创建 http 请求
拦截请求和响应
转换请求数据和响应数据
支持 Promise API（可以配合ES7的async await使用，解决回调地狱）
客户端支持防止CSRF
提供了一些并发请求的接口
轻量，体积小

#要想把axios装项目
IE兼容性处理
封装、配置axios
把他挂到vue的prototype上（这样就不用每个文件都引入了）

#IE兼容处理
axios是promise实现的，提到promise，首先应该想到IE不支持，所以应该先加个垫片，给IE做下兼容性处理
npm install --save babel-polyfill

然后再main.js中引入

import 'babel-polyfill'
