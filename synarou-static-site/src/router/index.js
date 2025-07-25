import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Privacy from '../components/Privacy.vue'
import Terms from '../components/Terms.vue'

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
  },
  {
    path: '/terms',
    name: 'Terms',
    component: Terms
  }
]

const router = createRouter({
  history: createWebHistory('/synarou-website/'),
  routes
})

export default router