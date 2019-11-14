import request from '@/utils/axios'

// 列表页渲染
export const searchList = data =>
  request({
    url: '/staff/list',
    method: 'post',
    data
  })

// 列表页渲染
export const exportStaff = data =>
  request({
    url: '/staff/exportStaff',
    method: 'post',
    data
  })
