<template>
    <div>
        <header>重定向和别名</header>
        <ul>
            <li>
                <router-link :to="2">A</router-link>
                
                
            </li>
            <li>
<router-link :to="1">重定向到A</router-link>
            </li>
            <li>
<router-link :to="3">重定向到A</router-link>
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
