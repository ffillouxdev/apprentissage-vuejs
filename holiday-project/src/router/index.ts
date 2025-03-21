import { createRouter, createWebHistory } from 'vue-router'
import AllDestinationsView from '@/views/AllDestinationsView.vue'
import DestinationView from '@/views/DestinationView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

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
      path: '/destination/:id',
      name: 'destination',
      props: true,
      component: DestinationView
    },
    {
      path: '/hawaii',
      redirect: '/destination/3'
    },

    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name : 'notFound',
      component  : NotFoundView,
    },
  ],
})

export default router
