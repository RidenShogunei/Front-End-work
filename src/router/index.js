import { createRouter, createWebHistory } from 'vue-router'


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
    path: '/detile',
    name: 'detile',
    component: () => import('../views/detilePage.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
