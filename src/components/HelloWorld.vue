<script setup>
import { useCountStore } from '@/stores/count'

defineProps({
  msg: String
})

const countStore = useCountStore()

const add = () => {
  countStore.updateCount(1)
}

const open = () => {
  ElMessage('this is a message.')
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <el-button type="button" @click="add"
      >count is {{ countStore.count }}</el-button
    >
    <el-button type="button" @click="open">openMessage</el-button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
