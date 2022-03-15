<script setup>
import { useMainStore } from '../stores'
import { storeToRefs } from 'pinia';
const { inputText, todoList } = storeToRefs(useMainStore())
const add = () => {
  if (inputText.value.trim() !== '') {
    todoList.value.push(
      inputText.value
    )
  }
}
</script>

<template>
  <div class="bar">
    <a-space>
      <a-input
        :style="{ width: '320px' }"
        placeholder="创建ToDo"
        v-model="inputText"
        @press-enter="add"
      />
      <a-button type="primary" @click="add">添加</a-button>
    </a-space>
  </div>
</template>

<style>
.bar {
  transform: translateX(40%);
}
</style>