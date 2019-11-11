import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 30000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
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
service.interceptors.response.use(
  response => {
    const res = response.data

    if (response.status !== 200) {
      return response.data
    } else {
      if (res.state !== 100) {
        // 需要做些什么
      } else {
        return response.data
      }
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
