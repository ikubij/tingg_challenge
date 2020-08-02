import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
import AuthLayout from '@/layout/AuthLayout'
Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: 'login',
      component: DashboardLayout,
      children: [
        {
          path: '/dashboard',
          // name: 'dashboardn',
          
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "demo" */ './views/Dashboard.vue')
        },
        {
          path: '/dashboard2',
          component: () => import(/* webpackChunkName: "demo" */ './views/Dashboard2.vue')
        },
        {
          path: '/messages',
          // name: 'icons',
          component: () => import(/* webpackChunkName: "demo" */ './views/Messages.vue')
        },
        {
          path: '/accounts',
          component: () => import(/* webpackChunkName: "demo" */ './views/ComingSoon.vue')
        },
        {
          path: '/credits',
          component: () => import(/* webpackChunkName: "demo" */ './views/ComingSoon.vue')
        },
        {
          path: '/reports',
          component: () => import(/* webpackChunkName: "demo" */ './views/ComingSoon.vue')
        },
        {
          path: '/contact_us',
          component: () => import(/* webpackChunkName: "demo" */ './views/ComingSoon.vue')
        },

      ]
    },
    {
      path: '/',
      redirect: 'login',
      component: AuthLayout,
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import(/* webpackChunkName: "demo" */ './views/Login.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import(/* webpackChunkName: "demo" */ './views/Register.vue')
        }
      ]
    }
  ]
})
