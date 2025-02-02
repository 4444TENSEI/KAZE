<template>
  <Icon :icon="icon" :height="height" :color="color"></Icon>
</template>

<script lang="ts" setup>
  import { Icon } from '@iconify/vue'

  defineProps({
    icon: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      default: 'auto',
    },
    color: {
      type: String,
    },
  })
</script>
