<template>
  <div :class="$style.toDoListContainer">
  <input type="text" value="" />
  <div :class="$style.toDoList">
    <div :class="$style.toDoListItem" v-for="toDoItem in toDoList" :key="toDoItem.id">
      {{ toDoItem.text }}
    </div>
  </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState(['toDoList'])
}
</script>

<style lang="scss" module>
@import '@/styles/colors';

.toDoList {
  border: 2px solid white;
  border-radius: 5px;
  margin: 10px;
  padding: 25px;
  width: 350px;

  .toDoListItem {
    font-size: 1.5em;
  }
}
</style>