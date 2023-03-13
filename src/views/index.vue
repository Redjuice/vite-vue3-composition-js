<script setup>
const router = useRouter()

const goLogin = () => {
  router.replace('/login')
}
</script>

<template>
  <div @click="goLogin">index</div>
</template>
