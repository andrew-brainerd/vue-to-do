import { v1 as uuid } from 'uuid';

export const TEXT_UPDATED = 'textUpdated';
export const ITEM_ADDED = 'itemAdded';
export const ITEM_COMPLETED = 'itemCompleted';

const mutations = {
  [TEXT_UPDATED](state, text) {
    state.toDoText = text;
  },
  [ITEM_ADDED](state, text) {
    state.toDoList.push({
      id: uuid(),
      text,
      isComplete: false
    });
    state.toDoText = '';
  },
  [ITEM_COMPLETED](state, item) {
    const itemIndex = state.toDoList.findIndex(listItem => listItem.id === item.id);
    state.toDoList.splice(itemIndex, 1, { ...state.toDoList[itemIndex], isComplete: true });
  }
};

export default mutations;
