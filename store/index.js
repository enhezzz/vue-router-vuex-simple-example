import Vuex from 'vuex'
import Vue from 'vue'
import asyncData from './asyncData'
import asyncOtherData from './asyncOtherData'
import {ASYNC_DATA_INCRE,ASYNC_OTHER_DATA_INCRE} from './actions'
import moduleA from './modules/moduleA'
import mutationType from './plugins'
Vue.use(Vuex);
export default new Vuex.Store({
    plugins: [mutationType],
    modules: {
        moduleA
    },
    state: {
        count : 1,
        users: [
            {name: 'a',auth: true},
            {name: 'b',auth : false},
            {name: 'c',auth: true}
        ],
        asyncData,
        asyncOtherData
    },
    mutations: {
        increment(state){
            state.count++;
        },
        asyncDataIncre(state){
            state.asyncData.value++;
        },
        asyncOtherDataIncre(state,payLoad){
            state.asyncOtherData.value += payLoad;
        }
    },
    getters: {
        authUsers(state){
            return state.users.filter(user => user.auth)
        }
    },
    actions: {
        [ASYNC_DATA_INCRE]({commit}){
            return new Promise((resolve,reject) => {
                setTimeout(() => {
                    commit('asyncDataIncre')
                    resolve({msg: 'aysncData'})
                  }, 1000)
            })
        },
        async [ASYNC_OTHER_DATA_INCRE]({commit,dispatch},payLoad){
            let a = await dispatch('ASYNC_DATA_INCRE');
            console.log(a)
            commit('asyncOtherDataIncre',payLoad);
        }
    }
})