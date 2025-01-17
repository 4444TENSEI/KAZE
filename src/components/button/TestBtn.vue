<template>
  <v-btn flat icon="mdi-cat" @click="test" />
</template>

<script setup>
  import { toast } from '@/hooks/toast'

  function test() {
    toast(
      '测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息',
    )
  }
</script>
