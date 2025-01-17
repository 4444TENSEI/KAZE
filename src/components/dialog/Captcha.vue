<template>
  <v-card class="py-12 px-6 text-center mx-auto ma-4" elevation="12" max-width="380" rounded="xl">
    <p class="mb-2" style="font-size: 1.8rem; font-weight: 600">查看您收件箱的验证码</p>

    <div class="text-body-2">
      邮件已发送至*****@mail.com <br />
      请输入您邮箱中收到的..<br />收得到才怪了目前只是个静态示例。
    </div>

    <v-sheet color="surface">
      <v-otp-input v-model="otp" type="password" variant="outlined"></v-otp-input>
    </v-sheet>

    <v-btn
      block
      class="my-2 text-h6"
      color="info"
      height="56"
      rounded="pill"
      text="验证"
      variant="outlined"
    ></v-btn>

    <div class="text-h6">没收到吗？<a href="#" @click.prevent="otp = ''">重试也没用</a></div>
  </v-card>
</template>
<script setup>
  import { shallowRef } from 'vue'

  const otp = shallowRef('')
</script>
