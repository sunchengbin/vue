/**
 * Created by sunchengbin on 2018/1/26.
 */
import Axios from 'axios'
import Qs from 'qs'
export default {
  axios (type) {
    /* axios 配置 */
    Axios.defaults.timeout = 30000
    switch (process.env.NODE_ENV) {
      // 开发环境接口域名
      case 'development':
        Axios.defaults.baseURL = 'http://api.zerotoone.com'
        break
      // 预上线环境接口域名
      case 'preview':
        Axios.defaults.baseURL = 'http://api.zerotoone.com'
        break
      // 线上接口域名
      default:
        Axios.defaults.baseURL = 'http://api.zerotoone.com'
        break
    }
    Axios.defaults.transformRequest = [function (data) {
      data = Qs.stringify(data)
      return data
    }]
    return Axios
  }
}
