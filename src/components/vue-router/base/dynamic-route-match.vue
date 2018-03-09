<template>
  <div>
    <ul>
      <li>
        <router-link :to="{name:'matchRes',params: {username: 'enhezzz'}}">/user/enhezzz</router-link>
      </li>
      <li><router-link :to="{name:'matchRes',params: {username: 'hgs'}}">/user/hgs</router-link></li>
      <li><router-link :to="{name:'matchRes',params: {username: 'hgs'},query: {id: 2015021047}}">/user/hgs?id=2015021047</router-link></li>
      <li><router-link :to="{name:'matchRes',params: {username: 'enhezzz',post_id: 123456}}">/user/enhezzz/post/123456</router-link></li>
      <li><router-link :to="{name:'matchRes',params: {username: 'enhezzz',post_id: 123456},query: {greet: 'hi~'}}">/user/enhezzz/post/123456?greet=hi~</router-link></li>
    </ul>
     
     <router-view></router-view>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>

</style>
