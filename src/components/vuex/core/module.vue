<template>
  <div>
    <header>module</header>
    <div>
      <div>
        <span>{{`moduleA中到getter.even:${moduleData}`}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    moduleData(){
      return this.$store.getters['moduleA/even'];
    }
  }
}
</script>
<style>

</style>
