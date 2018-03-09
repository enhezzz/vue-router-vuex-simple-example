<template>
  <div>
      <div class="slider">
        <div>
          <h4>基础</h4>
        <ul>
          <li><router-link :to="{name: 'dynamic-route-match'}" append>动态路由匹配</router-link></li>
          <li><router-link :to="{name: 'nested-route'}">嵌套路由</router-link></li>
          <li><router-link :to="{name: 'programming-style-nav'}">编程式导航</router-link></li>
          <li><router-link :to="{name: 'named-route'}">命名路由</router-link></li>
          <li><router-link :to="{name: 'named-view'}">命名视图</router-link></li>
          <li><router-link :to="{name: 'redirect-and-rename'}">重定向和别名</router-link></li>
          <li><router-link :to="{name: 'pass-props'}">向路由组建传递props</router-link></li>
          <li><router-link :to="{name: 'mode'}">html history模式</router-link></li>
        </ul>
        </div>
        <div>
          <h4>进阶</h4>
        <ul>
          <li><router-link :to="{name: 'nav-guard'}">导航守卫</router-link></li>
          <li><router-link :to="{name: 'meta-info'}">路由元信息</router-link></li>
          <li><router-link :to="{name: 'transition'}">过渡效果</router-link></li>
          <li><router-link :to="{name: 'get-data'}">数据获取</router-link></li>
          <li><router-link :to="{name: 'scroll'}">滚动行为</router-link></li>
          <li><router-link :to="{name: 'lazy-load'}">懒加载</router-link></li>
        </ul>
        </div>
        <div>
          <h4>API </h4>
        <ul>
          <li><router-link to="">router-link</router-link></li>
          <li><router-link to="">router-view</router-link></li>
        </ul>
        </div>

      </div>
     <router-view class="main"></router-view>
  </div>
</template>
<script>
export default {};
</script>
<style>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
 
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
