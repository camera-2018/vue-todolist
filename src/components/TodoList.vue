<script setup>
import Todo from './Todo.vue'
import Done from './Done.vue'
import Doing from './Doing.vue'
import Bar from './Bar.vue'
import { onMounted } from 'vue'
import { useMainStore } from '../stores'
import { storeToRefs } from 'pinia'
const { selectedKeys } = storeToRefs(useMainStore())
onMounted(()=>{
  selectedKeys.value.splice(0, selectedKeys.value.length, '1')
})
</script>

<template>
  <a-layout style="height: 400px;">
    <a-layout-header>
      <Bar />
    </a-layout-header>
    <a-layout-content class="list">
      <a-space size="large" align="start">
        <Todo />
        <Doing />
        <Done />
      </a-space>
    </a-layout-content>
  </a-layout>
</template>

<style>
.list {
  transform: translate(0, 10%);
  display: block;
  margin: 0 auto;
}
</style>