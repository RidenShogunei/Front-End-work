import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [

  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/mainpage',
    name: 'mainpage',
    component: () => import('../views/mainPage.vue')
  },
  {
    path: '/navigate',
    name: 'navigate',
    component: () => import('../views/navigatePage.vue')
  },
  {
    path: '/music',
    name: 'music',
    component: () => import('../views/musicPage.vue')
  },
  {
    path: '/learn',
    name: 'learn',
    component: () => import('../views/learnPage.vue')
  },
  {
    path: '/animation',
    name: 'animation',
    component: () => import('../views/animationPage.vue')
  },
  {
    path: '/game',
    name: 'game',
    component: () => import('../views/gamePage.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
