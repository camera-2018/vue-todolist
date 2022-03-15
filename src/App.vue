<script setup>
import { useMainStore } from './stores';
import { storeToRefs } from 'pinia'
const { selectedKeys } = storeToRefs(useMainStore())
</script>

<template>
  <a-layout style="height: 400px;">
    <a-layout-header>
      <div class="menu-demo">
        <a-menu mode="horizontal" :default-selected-keys="['1']" :selected-keys="selectedKeys">
          <router-link to="/">
            <a-menu-item key="0" :style="{ padding: 0, marginRight: '38px' }" disabled>
              <div
                id="menu-logo"
                :style="{
                  width: '80px',
                  height: '30px',
                  borderRadius: '2px',
                  cursor: 'text',
                }"
              >Todolist</div>
            </a-menu-item>
          </router-link>
          <router-link to="todolist">
            <a-menu-item key="1">Home</a-menu-item>
          </router-link>
          <router-link to="about">
            <a-menu-item key="2">About</a-menu-item>
          </router-link>
        </a-menu>
      </div>
    </a-layout-header>
    <a-layout-content>
      <router-view></router-view>
    </a-layout-content>
  </a-layout>
</template>

<style>
.menu-demo {
  box-sizing: border-box;
  width: 100%;
  /* padding: 40px; */
  background-color: var(--color-neutral-2);
}
#menu-logo {
  color: rgb(var(--primary-6));
  font-size: 20px;
  font-weight: bold;
}
body {
  overflow-x: hidden;
}
</style>
