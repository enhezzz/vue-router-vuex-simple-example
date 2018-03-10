<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
 
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
*{
  box-sizing: border-box;
}
html,body{
  padding: 0;
  margin: 0;
}
.slider{
  width: 21%;
  display: inline-block;
  border-right: 1px solid rgb(100, 100, 0)
}
.main{
  width: 78%;
  display: inline-block;
  vertical-align: top;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
 
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
