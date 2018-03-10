<template>
    <div>
        <h1>导航守卫</h1>
        <button @click="toLeave">save</button>
    </div>
</template>
<script>
export default {
    data () {
        return {
            leave: false
        }
    },
  methods: {
      toLeave(){
          this.leave = true;
      }
  },
   beforeRouteEnter (to, from, next) {
    console.log('组件内enter守卫');
    next();
  },
    beforeRouteLeave (to, from, next) {
    if(this.leave || window.confirm('你确认离开吗？'))
    next();
    else next(false);
  }
}
</script>
<style>

</style>
