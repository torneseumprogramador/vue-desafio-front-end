import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './paginas/HomePage'
import SobrePage from './paginas/SobrePage'
import NotFoundPage from './paginas/NotFoundPage'
import LoginPage from './paginas/LoginPage'

import ProdutosPage from './paginas/produtos/ProdutosPage'
import NovoProdutoPage from './paginas/produtos/NovoProdutoPage'
import AlterarProdutoPage from './paginas/produtos/AlterarProdutoPage'

import { authGuard } from './guards/authGuard'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    meta: { requiresAuth: true }
  },
  {
    path: '/sobre',
    name: 'SobrePage',
    component: SobrePage,
    meta: { requiresAuth: true }
  },
  {
    path: '/produtos',
    name: 'ProdutosPage',
    component: ProdutosPage,
    meta: { requiresAuth: true }
  },
  {
    path: '/produtos/novo',
    name: 'NovoProdutoPage',
    component: NovoProdutoPage,
    meta: { requiresAuth: true }
  },
  {
    path: '/produtos/:id',
    name: 'AlterarProdutoPage',
    component: AlterarProdutoPage,
    meta: { requiresAuth: true }
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

router.beforeEach(authGuard);

export default router
