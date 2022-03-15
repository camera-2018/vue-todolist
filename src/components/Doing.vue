<script setup>
import { useMainStore } from '../stores'
import { storeToRefs } from 'pinia'
import { Message } from '@arco-design/web-vue'
const { doingList, doneList } = storeToRefs(useMainStore())
function del(index) {
  doingList.value.splice(index, 1)
  Message.success('删除成功')
}
function toDone(index) {
  doneList.value.push(doingList.value[index])
  doingList.value.splice(index, 1)
  Message.success('移动成功')
}
</script>

<template>
  <a-list :max-height="550" id="alist">
    <template #header>
      <icon-up-circle />Doing
    </template>
    <a-list-item v-for="(element, index) in doingList" :key="element">
      {{ element }}
      <template #extra>
        <a-space size="mini">
          <a-button-group>
            <a-button size="mini" status="success" @click="toDone(index)">
              <template #icon>
                <icon-check-circle />
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