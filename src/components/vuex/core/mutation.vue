<template>
    <div>
        <span>
            {{`count: ${count}`}}
        </span>
    <button @click="countPlus">count++</button>
        </div>
</template>
<script>
export default {
  computed: {
      count(){
          return this.$store.state.count;
      }
  },
  methods: {
      countPlus(){
          this.$store.commit('increment');
      }
  }
}
</script>
<style>

</style>
