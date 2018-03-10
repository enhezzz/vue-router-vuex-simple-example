import vuexIndex from './vuex-index.vue'
import state from './core/state'
import getter from './core/getter'
import mutation from './core/mutation'
import action from './core/action'
import modules from './core/module'
export default {
    
        path: '/vuex',
        name: 'vuex',
        component:vuexIndex,
        children: [
            {
                path: 'state',
                name: 'state',
                component: state
            },
            {
                path: 'getter',
                name: 'getter',
                component: getter
            },
            {
                path: 'mutation',
                name: 'mutation',
                component: mutation
            },
            {
                path: 'action',
                name: 'action',
                component: action
            },
            {
                path: 'modules',
                name: 'modules',
                component: modules
            }
        ]
    
}