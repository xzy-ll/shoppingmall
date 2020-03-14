import axios from 'axios'
export function request(config) {
  // 1创建axios的实列
  const instance = axios.create({
    baseURL:'http://www.xiongmaoyouxuan.com',
    timeout: 5000
  })
  // axios拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);

  })
  // 2.2响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);

  })
  // 发送真正的网络请求
  return instance(config)
}

// export function requsest(config) {
//   return new Promise((resolve, reject) => {
//     // 创建axios实列
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })
//     // axios拦截
//     instance.interceptors.request.use(config => {
//       return config
//     }, err => {
//       console.log(err);

//     })
//     // 2.2响应拦截
//     instance.interceptors.response.use(res => {
//       return res.data
//     }, err => {
//       console.log(err);

//     })
//     // 发送真正的网络请求
//     instance(config).then(res => {
//       resolve(res)
//     }, err => {
//       reject(err)
//     })
//   })
// }
