<template>
  <v-app-bar border="b" class="ps-4 position-fixed" flat>
    <v-app-bar-nav-icon
      @click="toggleDrawer"
      v-if="$vuetify.display.smAndDown"
    />

    <v-app-bar-title>
      <p
        class="font-weight-black cursor-default"
        style="font-size: 1.8rem; letter-spacing: 0.1em; line-height: 1"
      >
        KAZE
      </p></v-app-bar-title
    >
    <!-- 搜索按钮组件 -->
    <HomeSearch />
    <!-- 头像列表 -->
    <UserProfile />
  </v-app-bar>
</template>

<script setup lang="ts">
const props = defineProps({
  drawer: {
    type: Boolean as () => boolean,
    required: true,
  },
});

const emit = defineEmits(["update:drawer"]);

const toggleDrawer = () => {
  emit("update:drawer", !props.drawer);
};
</script>
