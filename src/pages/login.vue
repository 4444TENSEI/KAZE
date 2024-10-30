<template>
  <body class="d-flex justify-center align-center w-100 h-100 flex-d pa-0 ma-0">
    <ThemeSwitch class="position-absolute" style="top: 2rem; right: 2rem" />
    <v-card class="pt-10 pb-4 px-6" width="360" max-width="400" rounded="xl">
      <div class="d-flex justify-center align-center mb-8">
        <v-img
          class="mr-3"
          inline
          width="42"
          rounded="circle"
          draggable="false"
          src="https://testingcf.jsdelivr.net/gh/4444TENSEI/CDN@master/img/icon/angeldog/angeldog.ico"
        />
        <p
          class="font-weight-black cursor-default"
          style="font-size: 2.4rem; letter-spacing: 0.1em; line-height: 1"
        >
          KAZE
        </p>
      </div>
      <form @submit.prevent="handleSubmit(submit)">
        <v-text-field
          prepend-inner-icon="mdi-email"
          class="mb-4"
          rounded="pill"
          variant="outlined"
          hide-details="false"
          autocomplete="email"
          clearable=""
          required
          :label="emailLabel"
          v-model="email.value.value"
          :color="email.errorMessage.value ? 'error' : 'info'"
        ></v-text-field>
        <v-text-field
          prepend-inner-icon="mdi-lock"
          class="mb-2"
          hide-details="false"
          rounded="pill"
          variant="outlined"
          clearable
          autocomplete="current-password"
          :type="pswVisible ? 'text' : 'password'"
          :label="passwordLabel"
          :counter="20"
          :append-inner-icon="pswVisible ? 'mdi-eye-off' : 'mdi-eye'"
          v-model="password.value.value"
          :color="password.errorMessage.value ? 'error' : 'info'"
          @click:append-inner="pswVisible = !pswVisible"
        >
        </v-text-field>
      </form>
      <div class="d-flex mb-2">
        <v-checkbox-btn color="info" label="记住" />
        <v-btn text="找回" rounded="pill" height="42" variant="flat" />
        <v-btn
          text="注册"
          rounded="pill"
          height="42"
          to="/register"
          variant="flat"
        />
      </div>
      <div class="mb-3 d-flex align-center">
        <v-btn
          icon="mdi-broom"
          class="text-h6 mr-2"
          size="56"
          border="md"
          rounded="circle"
          variant="outlined"
          @click="handleReset"
        />
        <v-btn
          text="登录"
          class="text-h6 flex-1-0"
          color="info"
          height="56"
          rounded="pill"
          variant="elevated"
          :loading="loading"
          type="submit"
        />
      </div>
      <v-divider class="mb-2">
        <div class="text-no-wrap text-grey mb-2">其他方式</div>
      </v-divider>
      <div class="d-flex align-center justify-center ga-2">
        <v-btn title="GitHub单点登录" icon="mdi-github" variant="tonal" />
        <v-btn
          title="心心"
          color="error"
          icon="mdi-cards-heart"
          variant="tonal"
        />
        <v-btn
          title="游客登录"
          color="info"
          icon="mdi-lightning-bolt"
          variant="tonal"
        />
      </div>
    </v-card>
  </body>
</template>
<script setup>
// 输入框验证库
import { useField, useForm } from "vee-validate";
import { computed, shallowRef } from "vue";
// 登录输入框校验
const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    email(value) {
      if (!value) return true;
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value))
        return true;
      return "需要正确的邮箱格式";
    },
    password(value) {
      if (!value) return true;
      if (value?.length >= 6 && value.length <= 20) return true;
      return "密码6-20个字符";
    },
  },
});
const email = useField("email");
const password = useField("password");
// 表单提交
const submit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
});
// 输入框显示隐藏小眼睛
const pswVisible = shallowRef(false);
// 将错误信息显示到label中
const emailLabel = computed(() => {
  return email.errorMessage.value && email.value.value
    ? email.errorMessage.value
    : "邮箱";
});
const passwordLabel = computed(() => {
  return password.errorMessage.value && password.value.value
    ? password.errorMessage.value
    : "密码";
});
</script>
