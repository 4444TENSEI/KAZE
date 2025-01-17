<template>
  <v-app>
    <v-main
      class="d-flex align-center justify-center w-100 h-100 pa-0 ma-0 home-bg"
    >
      <div align="center" max-width="400">
        <v-icon size="6rem">mdi-earth-remove</v-icon>
        <h1 class="my-3 font-weight-black">404 页面不存在</h1>
        <h3 class="mb-4 font-weight-medium">来到一个不存在的地方，请返回吧~</h3>
        <v-btn
          prepend-icon="mdi-arrow-left-bottom-bold"
          rounded="pill"
          size="x-large"
          @click="goBack"
        >
          返回
        </v-btn>
      </div>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
  const router = useRouter()
  const goBack = () => {
    if (window.history.length > 1) {
      router.go(-1)
    } else {
      router.push('/')
    }
  }
</script>
