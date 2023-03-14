<script setup>
const router = useRouter()
const { x, y } = useMouse()

const goLogin = () => {
  router.replace('/login')
}
</script>

<template>
  <ElButton @click="goLogin">goLogin</ElButton>

  <HelloWorld />

  <h1>测试 vueUse 的鼠标坐标</h1>
  <h3>Mouse: {{ x }} x {{ y }}</h3>
</template>
