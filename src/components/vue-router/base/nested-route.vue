<template>
    <div>
        <header class="contain title">嵌套路由<small>sad</small></header>
        <div class="contain">
            <pre>
                <code>
                    /user/foo/profile                     /user/foo/posts
+------------------+                  +-----------------+
| User             |                  | User            |
| +--------------+ |                  | +-------------+ |
| | Profile      | |  +------------>  | | Posts       | |
| |              | |                  | |             | |
| +--------------+ |                  | +-------------+ |
+------------------+                  +-----------------+
                </code>
            </pre>
        </div>
    </div>
</template>
<script>
export default {
  
}
</script>
<style>
    .contain{
        padding: 0 10%;
    }
    .title{
        padding-top: 6%;
        padding-bottom :6%
    }
</style>
