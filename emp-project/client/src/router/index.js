import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainComponent.vue'
import EmpList from '../views/EmpList.vue'
import EmpInfo from '../views/EmpInfo.vue'
import EmpForm from '../views/EmpForm.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/empList',
    name: 'emplist',
    component: EmpList
  },
  {
    path: '/empInfo',
    name: 'empInfo',
    component: EmpInfo
  },
  {
    path: '/empForm',
    name: 'empForm',
    component: EmpForm
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
