<template>
    <v-app>
      <v-app-bar :elevation="2">
        <v-app-bar-title>Application Bar</v-app-bar-title>
      </v-app-bar>
      <v-footer color="lime" app>
        <h4 class="text-center">Footer</h4>
      </v-footer>
      <v-main>
        <v-card class="demo-panel" variant="outlined">
          <p>Card Content<br>(selectable text)</p>
          <v-fab
            absolute
            app
            color="primary"
            location="right bottom"
            size="large"
            icon
          >
            <v-icon>mdi-crown</v-icon>
          </v-fab>
        </v-card>
      </v-main>
    </v-app>
  </template>
  
  <style scoped>
  .demo-panel { margin: 0 80px 50px; padding: 24px; min-height: 300px; }
  </style>
  