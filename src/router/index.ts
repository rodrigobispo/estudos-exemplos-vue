import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SimpleForm from '../views/SimpleForm/SimpleForm.vue'
import ProductSock from '../views/StoreSocks/ProductSock.vue'

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
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
