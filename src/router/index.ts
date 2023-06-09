import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SimpleForm from '../views/SimpleForm/SimpleForm.vue'
import ProductSock from '../views/StoreSocks/ProductSock.vue'
import LoginForm from '../views/Login/LoginForm.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/simpleForm',
    name: 'simple-form',
    component: SimpleForm
  },
  {
    path: '/sock',
    name: 'sock',
    component: ProductSock
  },
  {
    path: '/login',
    name: 'login',
    component: LoginForm
  },
  {
    path: '/methodsComputedDiff',
    name: 'methodsComputedDiff',
    component: () => import('@/views/MethodsComputedDiff/MethodsComputedDiff.vue')
  },
  {
    path: '/githubUserProfile',
    name: 'githubUserProfile',
    component: () => import('@/views/GithubUserProfile/GithubUserProfile.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
