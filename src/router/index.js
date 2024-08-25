import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/Main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      redirect: { name: 'home' },
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('@/views/Home.vue')
        },
        {
          path:'user',
          name:'user',
          component: () => import('@/views/User.vue')
        },
        {
          path:'mail',
          name:'mail',
          component: () => import('@/views/Mail.vue') 
        }
      ]
    },
  ]
})

export default router
