import { createRouter, createWebHistory } from 'vue-router'
import BlogView from '../views/BlogView.vue'
import AjoutView from '@/views/AjoutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BlogView,
    },
    {
      path: '/home',
      redirect : '/'
    },
    {
      path: "/add-article",
      name  : "add-article",
      component: AjoutView
    },
  ],
})

export default router
