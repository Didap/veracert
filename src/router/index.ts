import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/certificazioni/iso-9001',
      name: 'iso-9001',
      component: () => import('@/pages/ISO9001Page.vue')
    },
    {
      path: '/certificazioni/iso-14001',
      name: 'iso-14001',
      component: () => import('@/pages/ISO14001Page.vue')
    },
    {
      path: '/certificazioni/iso-45001',
      name: 'iso-45001',
      component: () => import('@/pages/ISO45001Page.vue')
    }
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0 }
  }
})

export default router
