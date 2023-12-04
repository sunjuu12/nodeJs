import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 처음 접속 시 오래 걸림. 처음엔 컴포넌트 다운하지 않고 호출할 때 컴퍼넌트 정보를 가지고 올 수 있도록 지시.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({ // 라우팅 목록
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
