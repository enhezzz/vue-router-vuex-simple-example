<template>
    <div>
        <header>编程式导航</header>
        <ul>
            <li @click="nav" data-route="dynamic-route-match">导航到动态路由匹配</li>
            <li @click="nav" data-route="nested-route">导航到嵌套路由</li>
            <li @click="nav" data-route="named-route">导航到命名路由</li>
            <li @click="nav" data-route="named-view">导航到命名视图</li>
            <li @click="nav" data-route="redirect-and-rename">导航到重定向和别名</li>
            <li @click="nav" data-route="pass-props">导航到向路由组件传递props</li>
            <li @click="nav" data-route="mode">导航到history模式</li>
        </ul>
    </div>
</template>
<script>
export default {
  methods: {
      nav(event){
          this.$router.push({name: event.target.dataset['route']});
      }
  }
}
</script>
<style scoped>
    li{
        color: rgb(235, 65, 156);
        padding: 15px
    }
    li:hover{
        cursor: pointer;
        text-decoration:underline
    }
</style>
