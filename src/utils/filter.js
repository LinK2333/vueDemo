/* eslint-disable-next-line */
import Vue from 'vue'
import moment from 'moment/moment'

export default {
  install (Vue) {
    // 以-分隔的时间格式化含时间
    Vue.filter('dateLine', function (val) {
      return moment(val).format('YYYY-MM-DD')
    })
  }
}
