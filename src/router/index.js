import { createRouter, createWebHistory } from 'vue-router'
import routerHome from '../modules/home/router'
import routerAuth from '../modules/auth/router'
import isAuth from '../middleware/isAuth'
import isRedirect from '../middleware/isRedirect'

const routes = [
  { 
    path: '/', 
    name: 'home',
    ...routerHome,
    beforeEnter: [isAuth]
  },
  {
    path: '/auth',
    name: 'auth',
    ...routerAuth,
    beforeEnter: [isRedirect]
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})