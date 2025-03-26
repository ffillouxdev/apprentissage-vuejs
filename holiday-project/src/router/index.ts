import { createRouter, createWebHistory } from 'vue-router'
import AllDestinationsView from '@/views/AllDestinationsView.vue'
import DestinationView from '@/views/DestinationView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import ExperiencesView from '@/views/destination/ExperiencesView.vue'
import DescriptionView from '@/views/destination/DescriptionView.vue'
import PreferencesView from '@/views/PreferencesView.vue'

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
      props: true,
      component: DestinationView,
      children : [
        {
          path : '',
          name: 'destination',
          redirect : {name: 'description'}
        },
        {
          path : "description",
          name: 'description',
          component: DescriptionView,
          props: true,
        },
        {
          name: 'experiences',
          path : "experiences",
          component: ExperiencesView,
          props : true,
        }
      ],
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
    {
      name: 'preferences',
      path: '/preferences',
      component: PreferencesView

    },
  ],
})

export default router
