import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './paginas/HomePage'
import SobrePage from './paginas/SobrePage'
import NotFoundPage from './paginas/NotFoundPage'
import LoginPage from './paginas/LoginPage'

import ProdutosPage from './paginas/produtos/ProdutosPage'
import NovoProdutoPage from './paginas/produtos/NovoProdutoPage'
import AlterarProdutoPage from './paginas/produtos/AlterarProdutoPage'

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
    path: '/produtos/novo',
    name: 'NovoProdutoPage',
    component: NovoProdutoPage
  },
  {
    path: '/produtos/:id',
    name: 'AlterarProdutoPage',
    component: AlterarProdutoPage
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
