<template>
  <MenuPC v-if="!mobile" />
  <MenuMobile v-else />
</template>

<script lang="ts" setup>
  import { useDisplay } from 'vuetify'

  const { mobile } = useDisplay()
</script>
