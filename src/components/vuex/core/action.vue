<template>
  <div>
    <div>
      <span>数据：</span>
      <div>
        
      {{asyncData}}
      </div>
      <div>
        {{asyncOtherData}}
      </div>
      <button @click="asyncUpdate">一秒后异步刷新数据</button>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    asyncData(){
      return this.$store.state.asyncData
    },
    asyncOtherData(){
      return this.$store.state.asyncOtherData
    }
  },
  methods: {
    asyncUpdate(){
      this.$store.dispatch('ASYNC_OTHER_DATA_INCRE',10);
    }
  }
}
</script>
<style>

</style>
