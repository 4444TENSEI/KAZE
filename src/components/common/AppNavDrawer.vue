<template>
  <v-navigation-drawer v-model="drawer">
    <v-list density="compact" item-props :items="items" nav />
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    modelValue: Boolean
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const drawer = computed({
      get: () => props.modelValue,
      set: (value) => emit('update:modelValue', value)
    });

    const items = ref([
      {
        title: "操作面板",
        prependIcon: "mdi-view-dashboard-outline",
        link: true,
      },
      {
        title: "用户大厅",
        prependIcon: "mdi-account-group",
        link: true,
      },
      {
        title: "插件",
        prependIcon: "mdi-briefcase-outline",
        link: true,
      },
    ]);

    return { drawer, items };
  }
};
</script>
