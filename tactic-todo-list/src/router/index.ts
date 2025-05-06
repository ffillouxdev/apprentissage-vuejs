import DashboardView from '@/views/DashboardView.vue'
import SpotsView from '@/views/TasksView.vue'
import { createRouter, createWebHistory } from 'vue-router'

/**
 * Router qui gère la gestion des routes
 * de la single page app, il y a 3 routes
 * ici et la route d'erreur de l'user quand
 * il met une route erronée.
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView,
    },
    {
      path: '/tâches',
      name: 'tâches',
      component: SpotsView,
    },
    {
      path: '/a-propos',
      name: 'a-propos',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error-page',
      component : ()=> import('@/views/ErrorView.vue')
    }
  ],
})

export default router
