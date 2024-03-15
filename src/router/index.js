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
    path: '/enter',
    name: 'enter',
    component: () => import('../views/game/enterPage.vue')
  },
  {
    path: '/game',
    name: 'game',
    component: () => import('../views/game/gamePage.vue')
  },
  {
    path: '/end',
    name: 'end',
    component: () => import('../views/game/endPage.vue')
  },
  {
    path: '/win',
    name: 'win',
    component: () => import('../views/game/winPage.vue')
  },
  {
    path: '/diary',
    name: 'diary',
    component: () => import('../views/diaryPage.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
