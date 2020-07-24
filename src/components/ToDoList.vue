<template>
  <div :class="$style.toDoListContainer">
    <div :class="$style.toDoInputContainer">
      <input
        type="text"
        ref="toDoInput"
        :class="$style.toDoInput"
        :value="toDoText"
        @input="e => setToDoText(e.target.value)"
        @keyup.enter="toDoText && addItem(toDoText)"
      />
      <span :class="$style.addButton" @click="toDoText && addItem(toDoText)">Add</span>
    </div>
    <div :class="$style.toDoList">
      <div :class="$style.toDoListItem" v-for="toDoItem in toDoList" :key="toDoItem.id">
        <span
          :class="[toDoItem.isComplete ? $style.completeText : '', $style.itemText]"
        >{{ toDoItem.text }}</span>
        <span
          :class="[toDoItem.isComplete ? $style.doneButton : $style.incompleteButton, $style.button]"
          @click="completeItem(toDoItem)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { SET_TO_DO_TEXT, ADD_ITEM, COMPLETE_ITEM } from '@/store/actions';

export default {
  name: 'ToDoList',
  computed: mapState(['toDoList', 'toDoText']),
  methods: mapActions([SET_TO_DO_TEXT, ADD_ITEM, COMPLETE_ITEM]),
  mounted() {
    this.$refs.toDoInput.focus();
  }
};
</script>

<style lang="scss" module>
@import "@/styles/colors";

.toDoListContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;

  .toDoInputContainer {
    display: flex;
    justify-content: center;
    margin: 10px;
    padding: 5px;

    .toDoInput {
      padding: 5px;
      width: 70%;
    }

    .addButton {
      background: $vueGreen;
      border: 2px solid black;
      cursor: pointer;
      margin-left: 5px;
      padding: 5px 10px;
      user-select: none;
    }
  }

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
        display: flex;
        font-weight: bold;
        height: 100%;
        justify-content: center;
        padding: 0 10px;
        user-select: none;
        width: 15px;
      }

      .incompleteButton {
        background: #666666;
        cursor: pointer;

        &::before {
          content: "—";
        }
      }

      .doneButton {
        background: $vueGreen;

        &::before {
          content: "✓";
        }
      }
    }
  }
}
</style>