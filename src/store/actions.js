import { TEXT_UPDATED, ITEM_ADDED, ITEM_COMPLETED } from './mutations';

export const SET_TO_DO_TEXT = 'setToDoText';
export const ADD_ITEM = 'addItem';
export const COMPLETE_ITEM = 'completeItem';

const actions = {
  [SET_TO_DO_TEXT]({ commit }, text) {
    commit(TEXT_UPDATED, text);
  },
  [ADD_ITEM]({ commit }, text) {
    commit(ITEM_ADDED, text);
  },
  [COMPLETE_ITEM]({ commit }, item) {
    commit(ITEM_COMPLETED, item);
  }
};

export default actions;
