import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Claim from '@/components/Claim'
import Confirm from '@/components/Confirm'
import Profile from '@/components/Profile'
import Login from '@/components/Login'
import Callback from '@/Callback'
import { logout, isLoggedIn } from '../auth.js'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: requireAuth
    },
    {
      path: '/claim',
      name: 'Claim',
      component: Claim,
      beforeEnter: requireAuth
    },
    {
      path: '/confirm',
      name: 'Confirm',
      component: Confirm,
      beforeEnter: requireAuth
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: requireAuth
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    { path: '/logout',
      beforeEnter(to, from, next) {
        logout()
      }
    },
    { path: '/callback',
      name: 'Callback',
      component: Callback
    }
  ]
})

function requireAuth(to, from, next) {
  if (!isLoggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}