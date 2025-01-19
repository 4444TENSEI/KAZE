<template>
  <v-menu v-model="menuShow" :close-on-content-click="false" location="top right" offset="15">
    <template #activator="{ props: menu }">
      <v-tooltip location="top" text="主题色">
        <template #activator="{ props: tooltip }">
          <v-btn flat icon="mdi-palette-outline" v-bind="mergeProps(menu, tooltip)" />
        </template>
      </v-tooltip>
    </template>

    <v-card class="flex px-2">
      <v-card-text class="text-center pa-0 d-flex flex-column justify-center align-center">
        <v-label class="my-2 justify-center justify-center"
          ><p class="text-h6">主题颜色</p></v-label
        >

        <v-color-picker
          v-model="color"
          show-swatches
          width="288"
          mode="rgb"
          :modes="['rgb', 'hex', 'hsl']"
          :swatches="colors"
          elevation="0"
        />
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script setup lang="ts">
  import { mergeProps } from 'vue'
  import { THEME_MAP } from '@/hooks/map'

  const menuShow = ref(false)
  const theme = useTheme()
  const KazeTheme = useStorage(THEME_MAP, '')
  const colors = [
    ['#1697f6', '#ff9800'],
    ['#4CAF50', '#FF5252'],
    ['#9C27b0', '#E91E63'],
    ['#304156', '#3f51b5'],
    ['#002FA7', '#492d22'],
  ]
  const color = computed({
    get() {
      return theme.themes.value.light.colors.KazeTheme
    },
    set(val: string) {
      KazeTheme.value = val
      theme.themes.value.light.colors.KazeTheme = val
      theme.themes.value.dark.colors.KazeTheme = val
    },
  })
</script>
