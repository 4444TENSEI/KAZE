<template>
  <v-btn
    flat
    :icon="nowTheme ? 'mdi-white-balance-sunny' : 'mdi-weather-night'"
    @click="toggleTheme"
  />
</template>

<script setup>
  import { useTheme } from 'vuetify'
  const theme = useTheme()
  const nowTheme = ref(!theme.global.current.value.dark)
  function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark
      ? 'light'
      : 'KazeTheme'
    nowTheme.value = !nowTheme.value
  }
  watch(
    () => theme.global.current.value.dark,
    newValue => {
      nowTheme.value = !newValue
    },
  )
</script>
