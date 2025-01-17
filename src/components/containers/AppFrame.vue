<template>
  <MenuPC v-if="!mobile" />
  <MenuMobile v-else />
</template>

<script lang="ts" setup>
  const { mobile } = useDisplay()
</script>
