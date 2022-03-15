import {
  defineStore
} from "pinia"
export const useMainStore = defineStore('main', {
  state() {
    return {
      inputText: '',
      todoList: ['todo1', 'todo2', 'todo3'],
      doingList: ['doing1', 'doing2', 'doing3'],
      doneList: ['done1', 'done2', 'done3'],
      selectedKeys: ['1'],
    }
  },
  getters: {

  },
  actions: {

  }
})