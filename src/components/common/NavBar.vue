<template>
  <v-app-bar
    border="b"
    class="position-fixed"
    density="comfortable"
    flat
    order="1"
  >
    <v-app-bar-title>
      <p
        class="font-weight-black cursor-default"
        style="font-size: 1.8rem; letter-spacing: 0.1em; line-height: 1"
      >
        KAZE
      </p>
    </v-app-bar-title>
    <SearchBtn />
    <TestBtn />
    <ThemeBtn />
  </v-app-bar>
</template>

<script setup lang="ts"></script>
