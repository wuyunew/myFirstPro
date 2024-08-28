import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/Main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      redirect: { name: 'login' },
      children: []
    },
    {
      path:'/login',
      name:'login',
      component: () => import('@/views/Login.vue')
    }
  ]
})

export default router
