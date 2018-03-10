<template>
  <div>
    <header>getter</header>
    <div>
      <h3>授权用户：</h3>
      <div>
        {{authUsers}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    authUsers(){
      return this.$store.getters.authUsers
    }
  }
}
</script>
<style>

</style>
