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
  const surface = useStorage(THEME_MAP, '#ffffff')
  const colors = [
    ['#ffffff', '#283C50'],
    ['#F0FAFF', '#323232'],
    ['#FFF5FA', '#283250'],
    ['#F8FFF8', '#1E3741'],
    ['#EEF0FF', '#0A3C50'],
  ]
  const color = computed({
    get() {
      return theme.themes.value.light.colors.surface
    },
    set(val: string) {
      surface.value = val
      theme.themes.value.light.colors.surface = val
    },
  })
</script>
