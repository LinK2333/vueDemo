import request from '@/utils/axios'

// 登录
// export const getLogin = data =>
//   request({
//     url: '/login',
//     method: 'post',
//     data
//   })

export const getLogin = data =>
  request({
    url: '/login',
    method: 'post',
    data
  })

export const getInfo = data =>
  request({
    url: '/getInfo',
    method: 'post',
    data
  })
export const menusRequest = data =>
  request({
    url: '/menus',
    method: 'post',
    data
  })
export const loginOutRequest = data =>
  request({
    url: '/loginout',
    method: 'post',
    data
  })
