<template>
  <div>
      <table>
      <thead>
        <tr>
          <th>模式</th>
          <th>匹配路径</th>
          <th>$route.params</th>
          <th>$route.query</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>/user/:username</td>
          <td>{{matchedRoute}}</td>
          <td>{{matchedParams}}</td>
          <td>{{matchQuery}}</td>
        </tr>
        <tr>
          <td>/user/:username/post/:post_id</td>
          <td>{{matchedRoute2}}</td>
          <td>{{matchedParams2}}</td>
          <td>{{matchQuery2}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  computed: {
      matchedRoute(){
          return `/user/${this.matchedParams}`;
      },
      matchedParams(){
          return this.$route.params.username;
      },
      matchQuery(){
          return JSON.stringify(this.$route.query) !== '{}'?this.$route.query : '无查询参数'
      },
      matchedRoute2(){
          return `/user/${this.matchedParams2.username}/post/${this.matchedParams2.post_id}`;
      },
      matchedParams2(){
          return this.$route.params;
      },
      matchQuery2(){
          return JSON.stringify(this.$route.query) !== '{}'?this.$route.query : '无查询参数'
      }
  }
}
</script>
<style>
  table{
    border: 1px solid #cecece;
    border-collapse: collapse
  }
  table tr{
    border-bottom: 1px solid #eeeeee;
  }
  table th,td{
    padding: 15px;
    border-left: 1px solid #eee
  }
</style>
