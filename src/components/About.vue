<script setup>
import { onMounted } from 'vue'
import { useMainStore } from '../stores'
import { storeToRefs } from 'pinia'
const { selectedKeys } = storeToRefs(useMainStore())
onMounted(() => {
  selectedKeys.value.splice(0, selectedKeys.value.length, '2')
})
</script>

<template>
  <a-card hoverable :style="{ width: '360px' }" :body-style="{ fontSize: '2rem' }" id="acard">
    <template #cover>
      <div :style="{
        overflow: 'hidden',
      }">
        <img
          :style="{ width: '100%', transform: 'translateY(-20px)' }"
          alt="dessert"
          src="https://avatars.githubusercontent.com/u/40380042?v=2"
        />
      </div>
    </template>
    <a-card-meta>
      <template #description>
        <a-popconfirm content="ROLL" type="success">
          相洋
          <a-spin />
        </a-popconfirm>
        <br />
        <a-link href="https://github.com/camera-2018">
          <icon-github />GitHub
        </a-link>
      </template>
    </a-card-meta>
  </a-card>
</template>

<style>
#acard {
  transform: translate(0, 15%);
  display: block;
  margin: 0 auto;
}
</style>