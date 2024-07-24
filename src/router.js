import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './paginas/HomePage'
import SobrePage from './paginas/SobrePage'
import NotFoundPage from './paginas/NotFoundPage'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/sobre',
    name: 'SobrePage',
    component: SobrePage
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFoundPage',
    component: NotFoundPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
