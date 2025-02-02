<template>
  <Icon :icon="icon" :height="height"></Icon>
</template>

<script lang="ts" setup>
  import { Icon } from '@iconify/vue'

  const props = defineProps({
    icon: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: false,
      default: 'auto',
    },
  })
</script>
