<template>
  <div>
      <div class="slider">
          <header>vuex</header>
          <ul>
              <li>
                  <router-link :to="{name: 'state'}">state</router-link>
              </li>
              <li>
                  <router-link :to="{name: 'getter'}">getter</router-link>
              </li>
              <li>
                  <router-link :to="{name: 'mutation'}">mutation</router-link>
              </li>
              <li>
                  <router-link :to="{name: 'action'}">action</router-link>
              </li>
              <li>
                   <router-link :to="{name: 'modules'}">modules</router-link>
              </li>
          </ul>
          
      </div>
      <div class="main">
          <router-view></router-view>
      </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>

</style>
