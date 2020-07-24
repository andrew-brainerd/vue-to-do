import { ITEM_ADDED } from './mutations';

export const ADD_ITEM = 'addItem';

const actions = {
  [ADD_ITEM]({ commit }, text) {
    commit(ITEM_ADDED, text);
  }
};

export default actions;
