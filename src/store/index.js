import Vue from 'vue'
import Vuex from 'vuex'
import { v1 as uuid } from 'uuid';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex)

const initialState = {
  toDoList: [
    {
      id: uuid(),
      text: 'Order Groceries',
      isComplete: false
    },
    {
      id: uuid(),
      text: 'Research Vuex Organization',
      isComplete: false
    },
    {
      id: uuid(),
      text: 'Build First Vue Application',
      isComplete: true
    }
  ]
};

export default new Vuex.Store({
  state: initialState,
  mutations,
  actions
})
