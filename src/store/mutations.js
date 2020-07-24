import { v1 as uuid } from 'uuid';

export const ITEM_ADDED = 'itemAdded';
export const ITEM_COMPLETED = 'itemCompleted';

const mutations = {
  [ITEM_ADDED](state, text) {
    state.toDoList.push({
      id: uuid(),
      text,
      isComplete: false
    });
  },
  [ITEM_COMPLETED](state, item) {
    const itemIndex = state.toDoList.findIndex(listItem => listItem.id === item.id);
    state.toDoList.splice(itemIndex, 1, { ...state.toDoList[itemIndex], isComplete: true });
  }
};

export default mutations;
