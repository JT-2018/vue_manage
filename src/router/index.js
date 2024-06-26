import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout/index.vue'
import Login from '../views/Login/login.vue'
import Home from '../views/Home/index.vue'
import Goods from '../views/Goods/index.vue'

const Order = () => import('../views/Order/index.vue')
const Params = () => import('../views/Params/index.vue')
const Weekend = () => import('../views/Weekend/index.vue')
const WebNotes = () => import('../views/Webs/index.vue')
const OrderList = () => import('../views/Order/OrderList/index.vue')
const OrderBack = () => import('../views/Order/OrderBack/index.vue')
const EventLoop = () => import('../views/Webs/EventLoop/index.vue')
const Test = () => import('../views/Webs/Test/index.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/goods',
        name: 'Goods',
        component: Goods
      },
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/params',
        name: 'Params',
        component: Params
      },
      {
        path: '/weekend',
        name: 'Weekend',
        component: Weekend
      },
      {
        path: '/order',
        name: 'Order',
        component: Order,
        redirect: '/oder/orderList',
        children: [
          {
            path: '/orderList',
            component: OrderList,
          },
          {
            path: '/orderBack',
            component: OrderBack,
          },
        ]
      },
      {
        path: '/webnotes',
        name: 'webnotes',
        component: WebNotes,
        children: [
          {
            path: '/eventLoop',
            component: EventLoop,
          },
          {
            path: '/test',
            component: Test,
          },
        ]
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
