import { createRouter, createWebHistory } from 'vue-router'
import AllDestinationsView from '@/views/AllDestinationsView.vue'
import HawaiView from '@/views/HawaiView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AllDestinationsView,
    },
    {
      path: '/home',
      redirect: '/'
    },
    {
      path: '/destination/3',
      name: 'hawaii',
      component: HawaiView
    },
    {
      path: '/hawaii',
      redirect: '/destination/3'
    },
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
