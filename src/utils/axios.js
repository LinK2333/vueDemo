import axios from 'axios'
// import { Message } from 'element-ui'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 30000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.accessToken = token
    }
    // 在发送请求之前做些什么
    return config
  },
  error => {
    // Do something with request error
    console.log(error, 'error') // for debug
    Promise.reject(error)
  }
)

// response拦截器
// service.interceptors.response.use(
//   response => {
//     // console.log('re', response)
//     const res = response.data
//     if (response.status !== 200) {
//       return response.data
//     } else {
//       if (res.status === 200) {
//         // 需要做些什么
//         console.log(res)
//         // Message.error()
//       }
//     }
//   },
//   error => {
//     if (error.response) {
//       Message.error(error.response.data.message)
//     }
//     return Promise.reject(error)
//   }
// )

export default service
