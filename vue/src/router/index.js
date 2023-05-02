import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BarView from '../views/BarView.vue'
import PieView from '../views/PieView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/BarView',
      name: 'BarView',
      component: BarView
    },
    {
      path: '/PieView',
      name: 'PieView',
      component: PieView
    }
  ]
})

export default router
