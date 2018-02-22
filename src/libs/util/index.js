function scrollToBottom (dom, scrollTop) {
  listenAndroidKeyboardToggle(() => {
    document.querySelector(dom).scrollTop = scrollTop || 9999
  }, () => {
    document.querySelector(dom).scrollTop = scrollTop || 9999
  })
}
function listenAndroidKeyboardToggle (onShow, onHide) {
  // 针对 android 机型
  // 通过窗口高度的变化来监听键盘的收起和出现
  let windowInnerHeightNoKeyboard = window.innerHeight
  let windowInnerHeightHasKeyboard = windowInnerHeightNoKeyboard
  if ((/(Android)\s+([\d.]+)/i).test(window.navigator.userAgent)) {
    window.addEventListener('resize', () => {
      if (window.innerHeight < windowInnerHeightNoKeyboard) {
        onShow && onShow(windowInnerHeightNoKeyboard)
      }
      if (window.innerHeight >= windowInnerHeightHasKeyboard) {
        onHide && onHide()
      }
    })
  }
}
function isAndroid () {
  if ((/(Android)\s+([\d.]+)/i).test(window.navigator.userAgent)) {
    return true
  }
  return false
}
function getUrlPrem (key, url) {
  const _search = url || window.location.search
  const _pattern = new RegExp(`[?&]${key}=([^&]+|\\w+)`, 'g')
  const _matcher = _pattern.exec(_search)
  let _items = null
  if (_matcher !== null) {
    try {
      _items = decodeURIComponent(decodeURIComponent(_matcher[1]))
    } catch (e) {
      try {
        _items = decodeURIComponent(_matcher[1])
      } catch (e) {
        _items = _matcher[1]
      }
    }
  }
  return _items
}
export {
  scrollToBottom,
  listenAndroidKeyboardToggle,
  isAndroid,
  getUrlPrem
}
