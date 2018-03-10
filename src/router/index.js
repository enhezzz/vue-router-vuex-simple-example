import Vue from 'vue'
import Router from 'vue-router'
import Init from '@/components/Init'

import vueRouterRoutes from '@/components/vue-router/routes'
import vuexRoutes from '@/components/vuex/routes'
Vue.use(Router);
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Init
    },
    vueRouterRoutes,
   vuexRoutes
    // {
    //   path: '/vuex',
    //   component: vuex-index
    // }
   
  ]
})
