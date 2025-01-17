import axios, { AxiosProgressEvent } from 'axios'

// 设置请求超时时间常量
const TIMEOUT = 5000

// 创建axios实例
const instance = axios.create({
  timeout: TIMEOUT,
})

// 请求拦截器
instance.interceptors.request.use(
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
instance.interceptors.response.use(
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

// 进度事件处理
const setupProgressListener = (
  uploadProgress: (progressEvent: AxiosProgressEvent) => void,
  downloadProgress: (progressEvent: AxiosProgressEvent) => void,
) => {
  instance.defaults.onDownloadProgress = downloadProgress
  instance.defaults.onUploadProgress = uploadProgress
}

// 示例进度事件处理器
const downloadProgress = (progressEvent: AxiosProgressEvent) => {
  if (progressEvent.total) {
    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
    console.log(`Download progress: ${percentCompleted}%`)
  } else {
    console.log(`Download progress: loaded ${progressEvent.loaded} bytes`)
  }
}

const uploadProgress = (progressEvent: AxiosProgressEvent) => {
  if (progressEvent.total) {
    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
    console.log(`Upload progress: ${percentCompleted}%`)
  } else {
    console.log(`Upload progress: loaded ${progressEvent.loaded} bytes`)
  }
}

// 设置进度监听器
setupProgressListener(uploadProgress, downloadProgress)

// 设置进度监听器
setupProgressListener(uploadProgress, downloadProgress)

// 导出axios实例
export default instance
