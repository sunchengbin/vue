/**
 * Created by sunchengbin on 2017/8/1.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as Types from './type'
import Cookie from '../cookie/cookie'
Vue.use(Vuex)
let token = Cookie.getCookie('token')
export default new Vuex.Store({
  state: {
    user: {},
    token: token
  },
  mutations: {
    [Types.LOGIN]: (state, data) => {
      localStorage.setItem('token', data)
      state.token = data
    },
    [Types.LOGOUT]: (state) => {
      localStorage.removeItem('token')
      state.token = null
    }
  }
})
