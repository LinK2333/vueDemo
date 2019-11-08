import request from '@/utils/axios'

// 活动页渲染
export const hello = data =>
  request({
    url: '/action/hello',
    method: 'post',
    data
  })
