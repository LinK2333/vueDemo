import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/login' },
    {
      path: '/Login',
      name: 'Login',
      component: resolve => require(['@/page/Login/index.vue'], resolve)
    },
    {
      path: '/index',
      name: 'index',
      component: resolve => require(['@/page/index/index.vue'], resolve)
    },
    {
      path: '*',
      name: 'error',
      component: resolve => require(['@/components/error.vue'], resolve)
    }
  ]
})

// 路由导航判断是否有登录
// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') {
//     next()
//   } else {
//     let token = localStorage.getItem('token')
//     if (token) {
//       next()
//     } else {
//       next('/login')
//     }
//   }
// })
export default router
