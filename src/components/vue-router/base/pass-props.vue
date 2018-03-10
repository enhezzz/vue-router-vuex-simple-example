<template>
    <div>
        <h1>传递props给路由组件</h1>
        <ul>
            <li>
                <router-link :to="{name: 'pass-data-res',params: {data: 1}}">传递数据1给路由组件</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
  
}
</script>
<style>

</style>
