import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './paginas/HomePage'
import SobrePage from './paginas/SobrePage'
import NotFoundPage from './paginas/NotFoundPage'
import ProdutosPage from './paginas/produtos/ProdutosPage'
import LoginPage from './paginas/LoginPage'

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
    path: '/produtos',
    name: 'ProdutosPage',
    component: ProdutosPage
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
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
