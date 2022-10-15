import axios from "axios";
import store from "@/store";
import router from "@/router";

export const baseURL= 'http://pcapi-xiaotuxian-front-devtest.itheima.net'
const instance = axios.create({
  baseURL,
  timeout: 5000
})

instance.interceptors.request.use(config => {
  const { profile } = store.state.user
  if (profile.token) {
    // 每次发请求前在header中加入响应头
    config.headers.Authorization = `Bearer ${profile.token}`
  }
  return config
},error => {
  return Promise.reject(error)
} )

instance.interceptors.response.use(res => res.data, error => {
  if(error.response && error.response.status === 401) {
    store.commit('user/setUser',{})
    //
    // 记录当前路径 , encodeURIComponent 转换uri编码，防止解析地址出问题
    const fullpath = encodeURIComponent(router.currentRoute.value.fullPath)
    router.push('/login?redirectUrl=' + fullPath) // 这个重定向地址是指啥 redirectUrl?
  }
  return Promise.reject(error)
} )

export default (url, methods, submitData) => {
  return instance({
    url,
    methods,
    [methods.toLowerCase() === 'get'? 'params' : 'data'] : submitData
    }
  )
}
