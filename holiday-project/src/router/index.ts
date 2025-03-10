import { createRouter, createWebHistory } from 'vue-router'
import AllDestinationsView from '@/views/AllDestinationsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AllDestinationsView,
    },
    // {
    //   path: '/brazil',
    //   name: 'brazil',
    //   component: BrazilView,
    // },
     // {
    //   path: '/panama',
    //   name: 'Panama',
    //   component: BrazilView,
    // },
     // {
    //   path: '/',
    //   name: 'brazil',
    //   component: BrazilView,
    // },
     // {
    //   path: '/',
    //   name: 'brazil',
    //   component: BrazilView,
    // },
     // {
    //   path: '/',
    //   name: 'brazil',
    //   component: BrazilView,
    // },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
