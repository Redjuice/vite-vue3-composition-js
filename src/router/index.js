import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/login.vue')
  },
  {
    path: '/',
    name: 'Index',
    meta: {
      title: '首页'
    },
    component: () => import('@/views/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
