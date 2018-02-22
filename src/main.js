// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from './router'
import Store from './libs/store/store'
import Axios from './libs/http/http'
import './css/base/base.scss'
import './assets/js/flexible/flexible'
import './assets/js/icon/iconfont'
import IconSvg from './components/icon/index.vue'
import {Alert, Toast} from 'wc-messagebox'
import 'wc-messagebox/style.css'
import vuescroll from 'vue-scroll'
Vue.use(vuescroll)
Vue.use(Alert)
Vue.use(Toast)

/* 将axios挂载带prototype上,在组件中可以直接使用this.axios访问 */
Vue.prototype.Axios = Axios.axios
/* 注册全局插件 */

Vue.component('icon-svg', IconSvg)

/* 关闭生产模式下给出的提示 */

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router: Router,
  store: Store,
  template: '<App/>',
  components: { App }
})
