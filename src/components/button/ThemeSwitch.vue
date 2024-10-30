<template>
  <v-btn
    :icon="nowTheme ? 'mdi-white-balance-sunny' : 'mdi-weather-night'"
    variant="elevated"
    @click="toggleTheme"
  ></v-btn>
</template>
<script setup>
import { useTheme } from "vuetify";

const theme = useTheme();
const nowTheme = ref(theme.global.current.value.dark ? false : true);

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark
    ? "light"
    : "KazeTheme";
  nowTheme.value = !nowTheme.value;
}
watch(
  () => theme.global.current.value.dark,
  (newValue) => {
    nowTheme.value = !newValue;
  }
);
</script>
