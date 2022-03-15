<script setup>
import { useMainStore } from '../stores'
import { storeToRefs } from 'pinia'
import { Message } from '@arco-design/web-vue'
const { todoList, doingList } = storeToRefs(useMainStore())
function del(index) {
  todoList.value.splice(index, 1)
  Message.success('删除成功')
}
function toDoing(index) {
  doingList.value.push(todoList.value[index])
  todoList.value.splice(index, 1)
  Message.success('移动成功')
}
</script>

<template>
  <a-list :max-height="550" id="alist">
    <template #header>
      <icon-compass />Todo
    </template>
    <a-list-item v-for="(element, index) in todoList" :key="element">
      {{ element }}
      <template #extra>
        <a-space size="mini">
          <a-button-group>
            <a-button size="mini" status="warning" @click="toDoing(index)">
              <template #icon>
                <icon-up-circle />
              </template>
            </a-button>
            <a-button size="mini" status="danger" @click="del(index)">
              <template #icon>
                <icon-delete />
              </template>
            </a-button>
          </a-button-group>
        </a-space>
      </template>
    </a-list-item>
  </a-list>
</template>

<style scoped>
#alist {
  width: 350px;
}
</style>