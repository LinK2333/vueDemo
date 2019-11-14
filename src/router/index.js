import Vue from 'vue'
import Router from 'vue-router'

// 容器
import Layout from '@/page/index/index'

Vue.use(Router)

/**
 * constantRoutes
 * 没有权限的基本页
 * 所有用户都可以访问
 */
export const constantRoutes = [
  { path: '/', redirect: '/login', hidden: true },
  {
    path: '/Login',
    name: 'Login',
    component: resolve => require(['@/page/Login/index'], resolve),
    hidden: true
  },
  {
    path: '/index',
    name: '员工明细',
    redirect: '/home',
    component: Layout,
    hidden: false,
    children: [
      {
        path: '/home',
        name: '明细查看',
        component: resolve => require(['@/page/home/index'], resolve)
      }
    ]
  }
]

/**
 * asyncRoutese
 * 带权限的路由页
 * 拥有权限的用户可以访问
 * 需要根据用户角色动态加载的路由
 */
export const asyncRoutes = [
  {
    path: '/add',
    name: '新增管理',
    redirect: '/staff',
    component: Layout,
    hidden: false,
    meta: {
      roles: ['admin', 'common']
    },
    children: [
      {
        path: '/staff',
        name: '新增设置',
        component: resolve => require(['@/page/staff/index'], resolve),
        hidden: false,
        meta: {
          roles: ['admin', 'common']
        }
      }
    ]
  },
  {
    path: '/examine',
    name: '审批管理',
    redirect: '/approval',
    component: Layout,
    hidden: false,
    meta: {
      roles: ['admin']
    },
    children: [
      {
        path: '/approval',
        name: '审批设置',
        hidden: false,
        component: resolve => require(['@/page/approval/index'], resolve),
        meta: {
          roles: ['admin']
        }
      }
    ]
  },
  {
    path: '*',
    name: 'error',
    component: resolve => require(['@/components/error'], resolve),
    hidden: true,
    meta: {
      roles: ['admin', 'common']
    }
  }
]

/**
 * 实例化vue的时候只挂载constantRouter
 */
const createRouter = () =>
  new Router({
    mode: 'history',
    scrollBehavior: () => ({
      y: 0
    }),
    routes: constantRoutes
  })

/**
 * addRouter 方法仅仅只是添加新的路由，并没有剔除原先路由
 * 当用户切换账号，不刷新页面，路由中会存在2个用户的路由 => 手动刷新页面不存在此问题
 * router的matcher方法返回一个新的router对象
 * 将新的router赋值给当前页面管理的router，以达到更新的目的
 *
 */
const router = createRouter()
export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
