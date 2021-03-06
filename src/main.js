// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' // 路由
import store from './store' // 状态管理
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

// 基础css样式设置
import '@/style/base.scss'

// 引入全局过滤组件
import Filter from '@/utils/filter'

// 引入工具模块
import _Tool from '@/utils/tool'

//  引入mock
import './mock/test'

// permission control
import './permission' // permission control

Vue.use(ElementUI)
Vue.use(Filter)

// 工具封装挂载到vue原型
Vue.prototype.tool = _Tool

// api路径挂载到vue原型
Vue.prototype.apiUrl = process.env.BASE_API

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
