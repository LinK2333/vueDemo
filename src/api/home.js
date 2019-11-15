import request from '@/utils/axios'

// 列表页渲染
export const searchList = data =>
  request({
    url: '/staff/list',
    method: 'post',
    data
  })

// home下载
export const exportStaff = data =>
  request({
    url: '/staff/exportStaff',
    method: 'post',
    data
  })

// 查看个人详情
export const getInfoById = data =>
  request({
    url: '/staff/getInfoById',
    method: 'post',
    data
  })
