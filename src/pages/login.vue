<template>
  <v-container class="d-flex align-center justify-center pa-0">
    <v-card
      class="flex-d pt-8 pb-5 px-5 mx-6 opacity-100"
      width="360"
      max-width="400"
      rounded="xl"
    >
      <div class="d-flex justify-center align-center mt-0 mb-6">
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
          label="邮箱账号"
          clearable
          required
          rounded="lg"
          variant="solo-filled"
          v-model="email.value.value"
          :error-messages="email.errorMessage.value"
        ></v-text-field>

        <v-text-field
          prepend-inner-icon="mdi-lock"
          label="密码"
          clearable
          class="mt-1"
          rounded="lg"
          variant="solo-filled"
          :type="visible ? 'text' : 'password'"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          @click:append-inner="visible = !visible"
          v-model="password.value.value"
          :counter="20"
          :error-messages="password.errorMessage.value"
        >
        </v-text-field>
      </form>

      <div class="d-flex mb-1">
        <v-checkbox-btn color="primary" label="记住我" />
        <v-btn text="找回" rounded="pill" height="42" variant="flat" />
        <v-btn
          text="注册"
          rounded="pill"
          height="42"
          to="/register"
          variant="flat"
        />
      </div>

      <v-row class="mb-3 d-flex" dense>
        <v-col cols="3" md="3">
          <v-btn
            class="text-h6"
            flat
            height="56"
            rounded="lg"
            text="清除"
            variant="outlined"
            @click="handleReset"
        /></v-col>
        <v-col cols="9" md="9">
          <v-btn
            text="登录"
            block
            class="text-h6"
            color="info"
            height="56"
            rounded="lg"
            variant="elevated"
            :loading="loading"
            type="submit"
        /></v-col>
      </v-row>

      <v-divider class="mb-3">
        <div class="text-no-wrap text-grey mb-3">其他方式</div>
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
      </div> </v-card
  ></v-container>
</template>


<script setup>
// 输入框验证库
import { useField, useForm } from "vee-validate";

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    email(value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;
      return "请输入正确的邮箱";
    },
    password(value) {
      if (value?.length >= 6) return true;
      return "密码6-20个字符";
    },
  },
});
const email = useField("email");
const password = useField("password");

const submit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
});

// 密码显示隐藏
const visible = shallowRef(false);
</script>
