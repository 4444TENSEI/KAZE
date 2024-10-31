<template #append>
  <v-btn class="text-none me-2" height="48" icon slim>
    <v-avatar
      color="surface-light"
      image="https://testingcf.jsdelivr.net/gh/4444TENSEI/CDN@master/img/icon/angeldog/angeldog.ico"
      size="36"
    />

    <v-menu activator="parent">
      <v-list density="compact" nav>
        <v-list-item append-icon="mdi-card-account-details" link title="个人" />
        <v-list-item append-icon="mdi-cog-outline" link title="设置" />
        <v-list-item append-icon="mdi-logout" link title="退出" />
      </v-list>
    </v-menu>
  </v-btn>
</template>
