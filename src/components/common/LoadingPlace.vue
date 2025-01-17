<template>
  <div class="d-flex align-center justify-center h-100 flex-column">
    <v-progress-circular
      color="blue-lighten-3"
      indeterminate="disable-shrink"
      :size="60"
      :width="4"
    />
    <p class="mt-4 cursor-default">加载中...</p>
  </div>
</template>
