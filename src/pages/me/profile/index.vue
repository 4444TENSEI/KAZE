<template>
  <div class="flex-container justify-center pa-0">
    <NavBar barTitle="我的资料"></NavBar>
    <!-- <v-sheet class="w-100" color="transparent"> -->
    <v-sheet class="w-100 mt-16">
      <Avatar class="avatar" size="100" /> <br />ID: {{ localProfile?.id }} <br />昵称:
      {{ localProfile?.nickname }} <br />邮箱: {{ localProfile?.email }} <br />个性签名:
      {{ localProfile?.bio }}
    </v-sheet>
  </div>
</template>

<script lang="ts" setup>
  import pb from '@/api/pocketbase'

  const localProfile = pb.authStore.record
</script>

<style lang="scss" scoped>
  .avatar {
    border: 2px solid rgb(120, 160, 200);
  }
</style>
