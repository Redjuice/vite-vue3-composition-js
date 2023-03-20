<script setup>
const router = useRouter()
const { x, y } = useMouse()

const goLogin = () => {
  router.replace('/login')
}
</script>

<template>
  <div class="flex-between">
    <ElButton @click="goLogin">goLogin</ElButton>
    <ElButton @click="goLogin">goLogin</ElButton>
  </div>

  <HelloWorld />

  <h1 class="title">测试 vueUse 的鼠标坐标</h1>
  <h3>Mouse: {{ x }} x {{ y }}</h3>
</template>

<style lang="scss">
.title {
  color: $primary-color;
}
</style>
