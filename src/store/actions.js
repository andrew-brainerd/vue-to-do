import { ITEM_ADDED, ITEM_COMPLETED } from './mutations';

export const ADD_ITEM = 'addItem';
export const COMPLETE_ITEM = 'completeItem';

const actions = {
  [ADD_ITEM]({ commit }, text) {
    commit(ITEM_ADDED, text);
  },
  [COMPLETE_ITEM]({ commit }, item) {
    commit(ITEM_COMPLETED, item);
  }
};

export default actions;
