<template>
  <div>
    <div  class="slider">
      <header>例子展示</header>
    <div>
      <router-link to="/vue-router">vue-router</router-link><br>
      <router-link to="/vuex">vuex</router-link>
    </div>
    </div>
    
    <Welcome class="main"/>
  </div>
</template>

<script>
import Welcome from '@/components/Welcome';
export default {
  name: 'Init',
  components: {
    Welcome
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
