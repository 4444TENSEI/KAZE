<template>
  <div class="fab_box">
    <v-fab absolute app color="primary" icon size="3.2rem">
      <v-icon size="2.4rem">mdi-plus</v-icon>
      <v-speed-dial
        v-model="showFab"
        activator="parent"
        :content-class="['bg-grey-lighten-3', 'rounded-pill', 'elevation-2', 'pa-2']"
        location="top center"
      >
        <v-btn key="1" color="success" icon="$success" />
        <v-btn key="2" color="info" icon="$info" />
        <v-btn key="3" color="warning" icon="$warning" />
        <v-btn key="4" color="error" icon="$error" />
      </v-speed-dial>
    </v-fab>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const showFab = ref(true)
</script>

<style lang="scss" scoped>
  .fab_box {
    position: fixed;
    right: 1rem;
    bottom: 3rem;
  }
</style>
