<template>
  <div>
      <header>state</header>
      <span>{{`count: ${count}`}}</span>
  </div>
</template>
<script>
export default {
  data () {
    return {
      count: JSON.stringify(this.$store.state.count) 
    }
  }
}
</script>
<style>

</style>
