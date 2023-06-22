import { createRouter, createWebHistory } from 'vue-router'
//Rotas do website
import HomeView from '../views/home/HomeView.vue'
//Rotas de autenticação
import LoginView from '../views/auth/LoginView.vue'
import RegisterView from '../views/auth/RegisterView.vue'

//Rotas do Dashboard
import MainView from '../views/dashboard/MainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/main',
      name: 'main',
      component: MainView
    },
  ]
})

export default router
