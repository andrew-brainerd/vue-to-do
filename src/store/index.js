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
      text: 'Build First Vue Application',
      isComplete: true
    },
    {
      id: uuid(),
      text: 'Research Vuex Organization',
      isComplete: false
    },
    {
      id: uuid(),
      text: 'Take Out the Trash',
      isComplete: false
    },
    {
      id: uuid(),
      text: 'Take a Shower',
      isComplete: false
    }
  ]
};

export default new Vuex.Store({
  state: initialState,
  mutations,
  actions
})
