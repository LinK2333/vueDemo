import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      // component: () => import('@/page/index/index.vue')
      component: resolve => require(['@/page/index/index.vue'], resolve)
    },
    {
      path: '/Login',
      name: 'Login',
      // component: () => import('@/components/Login')
      component: resolve => require(['@/page/Login/index.vue'], resolve)
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      // component: () => import('@/components/HelloWorld')
      component: resolve => require(['@/components/HelloWorld'], resolve)
    },
    {
      path: '*',
      name: 'error',
      component: resolve => require(['@/components/error'], resolve)
    }
  ]
})
