<template>
  <div :class="$style.toDoListContainer">
    <!-- <input type="text" value /> -->
    <div :class="$style.toDoList">
      <div
        :class="$style.toDoListItem"
        v-for="toDoItem in toDoList"
        :key="toDoItem.id"
      >
        <span :class="[toDoItem.isComplete ? $style.completeText : '', $style.itemText]">{{ toDoItem.text }}</span>
        <span :class="[toDoItem.isComplete ? $style.doneButton : $style.incompleteButton, $style.button]" @click="completeItem(toDoItem)" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { COMPLETE_ITEM } from '@/store/actions';

export default {
  computed: mapState(['toDoList']),
  methods: mapActions([COMPLETE_ITEM])
};
</script>

<style lang="scss" module>
@import "@/styles/colors";

.toDoListContainer {
  .toDoList {
    border-radius: 5px;
    color: black;
    margin: 10px;
    padding: 5px;
    width: 350px;

    .toDoListItem {
      align-items: center;
      background: white;
      border-radius: 5px;
      display: flex;
      height: 50px;
      margin: 15px 0;
      padding-left: 5px;

      .itemText {
        font-size: 1.3em;
        flex: 1;
        padding: 5px;

        &.completeText {
          text-decoration: line-through;
        }
      }

      .button {
        align-items: center;
        align-self: flex-end;
        border-left: 2px solid black;
        border-radius: 0 5px 5px 0;
        cursor: pointer;
        display: flex;
        font-weight: bold;
        height: 100%;
        justify-content: center;
        padding: 0 10px;
        width: 15px;
      }

      .incompleteButton {
        background: #666666;

        &::before {
          content: '—';
        }
      }

      .doneButton {
        background: $vueGreen;

        &::before {
          content: '✓';
        }
      }
    }
  }
}
</style>