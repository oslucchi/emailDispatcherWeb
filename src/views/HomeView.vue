<template>
  <div id="header">
    <img alt="Vue logo" src="@/assets/logoWedi.png">
    <h1>Email Dispatcher</h1>
    <p></p>
  </div>
  <div id="body">
    <TaskHandler/>
  </div>
</template>

<script lang='ts'>
import TaskHandler from '@/components/TaskHandler.vue';
export default {
  name: 'HomeView',
  props: {
  },
  components: {
    TaskHandler,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
