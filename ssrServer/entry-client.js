// import { createApp } from './app'
// // 客户端特定引导逻辑……
// const { app } = createApp()
// // 这里假定 App.vue 模板中根元素具有 `id="app"`
// app.$mount('#app')
import { createApp } from './app'
const { app, router, store} = createApp()
router.onReady(() => {
  app.$mount('#app')
})
if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__)
  }