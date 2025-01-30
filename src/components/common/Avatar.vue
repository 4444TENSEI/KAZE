<template>
  <v-avatar :image="userInfo.avatarUrl + thumbParam" :size="size" color="surface-variant" />
</template>

<script lang="ts" setup>
  import { useUserInfoStore } from '@/stores'

  const { userInfo } = useUserInfoStore()

  const props = defineProps({
    size: {
      type: Number,
      default: 24,
    },
  })

  /** 根据size的大小，请求不同尺寸的头像URL */
  const thumbParam = props.size < 36 ? '?thumb=100x100' : ''
</script>
