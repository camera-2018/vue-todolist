<script setup>
import { ref } from 'vue'
const username = ref()
const password = ref()
const login = () => {
  console.log(username.value, password.value);
}
</script>
<template>
  <div class="content">
    <a-card :style="{ width: '360px' }">
      <template #title>
        <a-space>
          <icon-bulb />
          <span :style="{ color: 'rgb(var(--primary-7))' }">登录</span>
        </a-space>
      </template>
      <a-space direction="vertical" fill size="large">
        <a-input
          :style="{ width: '330px' }"
          placeholder="用户名"
          allow-clear
          :max-length="11"
          show-word-limit
          size="large"
          v-model="username"
        >
          <template #prefix>
            <icon-user />
          </template>
        </a-input>
        <a-input
          :style="{ width: '330px' }"
          placeholder="密码"
          allow-clear
          size="large"
          v-model="password"
        >
          <template #prefix>
            <icon-safe />
          </template>
        </a-input>
        <a-link href="#">
          没有账号？去注册
          <icon-double-right />
        </a-link>
        <a-popover position="right">
          <router-link to="todolist">
            <a-button type="primary" long @click="login">登录</a-button>
          </router-link>
          <template #content>
            <p>登录没写，就是个样式</p>
            <p>
              点击登录去Todolist
              <icon-double-right />
            </p>
          </template>
        </a-popover>
      </a-space>
    </a-card>
  </div>
</template>

<style scoped>
.content {
  width: 340px;
  transform: translate(0, 50%);
  display: block;
  margin: 0 auto;
}
</style>
