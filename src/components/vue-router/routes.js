import vueRouterIndex from '@/components/vue-router/vue-router-index'
import dynamicRouteMatch from './base/dynamic-route-match'
import nestedRoute from './base/nested-route'
import programmingStyleNav from './base/programming-style-nav'
import mode from './base/mode'
import namedRoute from './base/named-route'
import namedView from './base/named-view'
import passProps from './base/pass-props'
import redirectAndRename from './base/redirect-and-rename'
import getData from './advanced/get-data.vue'
import metaInfo from './advanced/meta-info'
import navGuard from './advanced/nav-guard'
import scroll from './advanced/scroll'
import transition from './advanced/transition'
import matchRes from './base/result/match-res'
import passDataRes from './base/result/pass-data-res.vue'
export default  {
    path: '/vue-router',
    component: vueRouterIndex,
    children: [
      {
        path: 'dynamic-route-match',
        name: 'dynamic-route-match',
        component: dynamicRouteMatch,
        children: [
          {
            path: 'user/:username',
            name: 'matchRes',
            component: matchRes
          }
        ]
      },
      {
        path: 'named-route',
        name: 'named-route',
        component: namedRoute
        
      },
      {
        path: 'programming-style-nav',
        name: 'programming-style-nav',
        component: programmingStyleNav
      },
      {
        path: 'mode',
        name: 'mode',
        component: mode
      },
      {
        path: 'named-view',
        name: 'named-view',
        component: namedView
      },
      {
        path: 'nested-route',
        name: 'nested-route',
        component: nestedRoute
      },
      {
        path: 'pass-props',
        name: 'pass-props',
        component: passProps,
        children: [
          {
            path: 'pass-data-res/:data?',
            name: 'pass-data-res',
            component: passDataRes,
            props: true
          }
        ]
      },
      {
        path: 'redirect-and-rename',
        name: 'redirect-and-rename',
        component: redirectAndRename
      },
      {
        path: 'get-data',
        name: 'get-data',
        component: getData
      },
      {
        path: 'lazy-load',
        name: 'lazy-load',
        component:  () => import(/* webpackChunkName: "lazy-load" */ './advanced/lazy-load.vue')
      },
      {
        path: 'meta-info',
        name: 'meta-info',
        component: metaInfo,
        meta:{name: '路由组件元信息'}
      },
      {
        path: 'nav-guard',
        name: 'nav-guard',
        component: navGuard,
        beforeEnter: (to, from, next) => {
          console.log('路由独享守卫');
          next();
        }
      },
      {
        path: 'scroll',
        name: 'scroll',
        component: scroll
      },
      {
        path: 'transition',
        name: 'transition',
        component: transition
      }

    ]
  }