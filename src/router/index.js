import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './hello-world'
import * as WeiXin from '../libs/weixin/weixin'
Vue.use(Router)
let routes = HelloWorld.routes
const router = new Router({
  mode: 'history', // 切换路由模式为history模式
  routes
})
/* 路由变化更改页面title */
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (WeiXin.default.isWeixin()) {
    next()
    // 这里可以做微信授权登录验证
  } else {
    next()
  }
})
export default router
