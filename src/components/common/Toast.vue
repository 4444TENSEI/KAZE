<template>
  <div class="toast-container">
    <v-alert
      v-for="toast in Array.from(toastMap.values())"
      :key="toast.id"
      border="start"
      class="mt-2 toast"
      closable
      :text="toast.message"
      :type="toast.type"
    />
  </div>
</template>

<script setup lang="ts">
  import { newToast, toastConfig } from '@/hooks/toast'

  // 定义 Map，存储Alert信息集合，使用Map便于删除
  const toastMap = ref<Map<string, toastConfig>>(new Map())

  // 监听新Alert创建
  watch(newToast.value, () => {
    toastMap.value.set(newToast.value.id, { ...newToast.value })
    deleteAlert(newToast.value.id)
  })

  const deleteAlert = (id: string) => {
    setTimeout(() => {
      toastMap.value.delete(id)
    }, newToast.value.timeout)
  }
</script>

<style scoped lang="scss">
  .toast-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 420px;
    max-width: 90vw;
    z-index: 1005;
    transform: translateX(-50%);
  }
  .v-icon {
    height: 100%;
  }
  .toast {
    padding: 6px;
  }
</style>
