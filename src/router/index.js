import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/home/home.vue'

const Home = () => import('views/home/home')
const Cart = () => import('views/cart/cart')
const Category = () => import('views/category/category')
const File = () => import('views/file/file')
const Details = () => import('views/details/details')
const Cart2 = () => import('views/cart/cart2')
// 1.安装
Vue.use(VueRouter)

// 创建
const routes = [
  // 
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/file',
    component: File
  },
  {
    path: '/details/:id',
    component: Details
  },
  {
    path: '/cart2/:id',
    component: Cart2,
  }
]
const router = new VueRouter({
  routes,
})
export default router
