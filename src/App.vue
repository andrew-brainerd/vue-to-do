<template>
  <div id="app">
    <ToDoList />
  </div>
</template>

<script>
import ToDoList from '@/components/ToDoList.vue'

export default {
  name: 'App',
  components: {
    ToDoList
  }
}
</script>

<style lang="scss">
@import '@/styles/colors';

body {
  background: $mainBackground;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $mainColor;
  margin-top: 60px;
  display: flex;
  justify-content: center;
}
</style>
