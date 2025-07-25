import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Privacy from '../components/Privacy.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy
  }
]

const router = createRouter({
  history: createWebHistory('/synarou-website/'),
  routes
})

export default router