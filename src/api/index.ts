import axios from 'axios'

// 设置请求超时时间常量
const TIMEOUT = 5000

// 创建axios实例
const kzAxios = axios.create({
  timeout: TIMEOUT,
})

// 请求拦截器
kzAxios.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    console.log('Starting Request', config)
    return config
  },
  error => {
    // 对请求错误做些什么
    console.error('Request Error:', error)
    return Promise.reject(error)
  },
)

// 响应拦截器
kzAxios.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    console.log('Response:', response)
    return response
  },
  error => {
    // 对响应错误做点什么
    console.error('Response Error:', error)
    return Promise.reject(error)
  },
)

// 导出axios实例
export default kzAxios
