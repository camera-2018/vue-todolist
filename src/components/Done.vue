<script setup>
import { useMainStore } from '../stores'
import { storeToRefs } from 'pinia'
import { Message } from '@arco-design/web-vue'
const { doneList } = storeToRefs(useMainStore())
function del(index) {
  doneList.value.splice(index, 1)
  Message.success('删除成功')
}
</script>

<template>
  <a-list :max-height="550" id="alist">
    <template #header>
      <icon-check-circle />Done
    </template>
    <a-list-item v-for="(element, index) in doneList" :key="element">
      {{ element }}
      <template #extra>
        <a-button size="mini" status="danger" @click="del(index)">
          <template #icon>
            <icon-delete />
          </template>
        </a-button>
      </template>
    </a-list-item>
  </a-list>
</template>

<style scoped>
#alist {
  width: 350px;
}
</style>