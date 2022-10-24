import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from "@/views/Layout";
import home from "@/views/home";
import TopCategory from '@/views/category/index'
import sub from "@/views/category/sub";
const routes = [
  {
    path: '/',
    component: Layout,
    children : [
      { path: '/', component: home },
      { path: '/category/:id',component: TopCategory }, // 动态路由
      { path: '/category/sub/:id',component: sub }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
