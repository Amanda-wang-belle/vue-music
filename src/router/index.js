/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [{
	path: '',
	redirect: '/index'
  },{
    path: '/index',
    name: 'index',
    component: () => 
		import ('@/pages/index/index')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('@/pages/detail/detail')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from , savedPosition) {
	    // savedPosition 会在使用浏览器前进或后退按钮时候生效
	    // he 使用 router.go() 或 router.back() 效果一致
  	if (savedPosition) {
  		return savedPosition
  	} else{
		// 与keepAlive结合，如果keepAlive的话，保存停留的位置：
		if (from.meta.keepAlive) {
		　　from.meta.savedPosition = document.body.scrollTop;
		}
  		return { x: 0, y: 0}
  	}
  }, 
  routes
})

export default router
