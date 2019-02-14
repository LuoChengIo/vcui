import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/index')
  },
  {
    path: '/button',
    name: 'button',
    component: () => import('@/views/button')
  },
  {
    path: '/icon',
    name: 'icon',
    component: () => import('@/views/icon')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('@/views/list')
  },
  {
    path: '/input',
    name: 'input',
    component: () => import('@/views/input')
  },
  {
    path: '/toast',
    name: 'toast',
    component: () => import('@/views/toast')
  },
  {
    path: '/radio',
    name: 'radio',
    component: () => import('@/views/radio')
  },
  {
    path: '/msgbox',
    name: 'msgbox',
    component: () => import('@/views/msgbox')
  },
  {
    path: '/loading',
    name: 'loading',
    component: () => import('@/views/loading')
  },
  {
    path: '/scroller',
    name: 'scroller',
    component: () => import('@/views/scroller')
  },
  {
    path: '/swiper',
    name: 'swiper',
    component: () => import('@/views/swiper')
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
