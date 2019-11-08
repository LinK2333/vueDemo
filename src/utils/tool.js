/*
 *  函数截流
 *  func 函数
 *  wait 延迟执行毫秒数
 *  immediate true 表立即执行，false 表非立即执行
 */
const debounce = (func, wait, immediate) => {
  let timeout

  return function () {
    let context = this
    let args = arguments

    if (timeout) clearTimeout(timeout)
    if (immediate) {
      var callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, wait)
      if (callNow) func.apply(context, args)
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args)
      }, wait)
    }
  }
}

/*
 *  函数防抖
 *  func 函数
 *  wait 延迟执行毫秒数
 */
const throttle = (func, wait) => {
  let previous = 0
  return function () {
    let now = Date.now()
    let context = this
    let args = arguments
    if (now - previous > wait) {
      func.apply(context, args)
      previous = now
    }
  }
}

export default {
  debounce,
  throttle
}
