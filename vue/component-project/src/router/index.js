import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import ListBinding from '../views/ListBinding.vue'
import IFBinding from '../views/IFBinding.vue'
import OnEvent from '../views/OnEvent.vue'
import Options from '../views/Options.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
  {
    path: '/dataBinding',
    name: 'data',
    component: DataBinding
  },
  {
    path: '/ListBinding',
    name : 'listBinding',
    component : ListBinding
  },
  {
    path: '/IFBinding',
    name : 'ifBinding',
    component : IFBinding
  },
  {
    path: '/OnEvent',
    name : 'onEvent',
    component : OnEvent
  },
  {
    path: '/Options',
    name : 'options',
    component : Options
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
