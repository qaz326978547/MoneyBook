import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/AccountBookView.vue')
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('../views/AccountView.vue')
    },
    {
      path: '/analyze',
      name: 'analyze',
      component: () => import('../views/AnalyzeView.vue')
    },
    {
      path: '/add',
      name: 'addData',
      component: () => import('../views/AddDataView.vue')
    }
  ]
})

export default router
