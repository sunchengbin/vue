/**
 * Created by sunchengbin on 2017/8/10.
 */
export default {
  getCookie (name) {
    var arr = window.document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'))
    if (arr != null) return unescape(arr[2])
    return null
  }
}
