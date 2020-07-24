import { v1 as uuid } from 'uuid';

export const ITEM_ADDED = 'itemAdded';

const mutations = {
  [ITEM_ADDED](state, text) {
    state.toDoList.push({
      id: uuid(),
      text,
      isComplete: false
    });
  }
};

export default mutations;
