<template>
  <v-container class="d-flex align-center justify-center pa-0">
    <v-card
      class="flex-d pt-8 pb-5 px-5 mx-6 opacity-100"
      width="360"
      max-width="400"
      rounded="xl"
    >
      <div class="d-flex align-center mt-0 mb-6">
        <v-btn
          icon="mdi-arrow-left-bold"
          to="login"
          size="42"
          class="position-absolute"
          variant="outlined"
        />
        <p
          class="font-weight-black cursor-default mx-auto"
          style="font-size: 2rem; letter-spacing: 0.1em; line-height: 1"
        >
          注册
        </p>
      </div>

      <form @submit.prevent="submit">
        <v-text-field
          prepend-inner-icon="mdi-cat"
          label="用户名"
          clearable
          required
          v-model="nickname.value.value"
          :counter="10"
          :error-messages="nickname.errorMessage.value"
        ></v-text-field>

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
          :hide-details="auto"
          details="66"
          :type="visible ? 'text' : 'password'"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          @click:append-inner="visible = !visible"
          v-model="password.value.value"
          :counter="20"
          :error-messages="password.errorMessage.value"
        >
        </v-text-field>

        <v-text-field
          prepend-inner-icon="mdi-shield-lock"
          label="重复密码"
          clearable
          class="mt-1"
          rounded="lg"
          variant="solo-filled"
          :hide-details="auto"
          details="66"
          :type="visible ? 'text' : 'password'"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          @click:append-inner="visible = !visible"
          v-model="password2.value.value"
          :counter="20"
          :error-messages="password2.errorMessage.value"
        >
        </v-text-field>
      </form>

      <v-dialog v-model="captchaDialog" max-width="400">
        <Captcha />
      </v-dialog>

      <v-btn
        text="发送验证码"
        class="text-h6"
        color="info"
        height="56"
        rounded="lg"
        block
        variant="outlined"
        @click="submitForm"
        :loading="loading"
        type="submit"
      /> </v-card
  ></v-container>
</template>

<script setup>
// 输入框验证库
import { useField, useForm } from "vee-validate";

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    nickname(value) {
      if (value?.length >= 2) return true;
      return "用户名至少2个字";
    },
    email(value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;
      return "请输入正确的邮箱";
    },
    password(value) {
      if (value?.length >= 6) return true;
      return "密码6-20个字符";
    },
    password2(value) {
      if (value === password.value.value) return true;
      return "两次输入的密码不一致";
    },
  },
});

const nickname = useField("nickname");
const email = useField("email");
const password = useField("password");
const password2 = useField("password2");
const submit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
});

// 密码显示隐藏
const visible = shallowRef(false);

// 表单验证通过后，显示验证码弹窗
const captchaDialog = ref(false);
const submitForm = handleSubmit(async (values) => {
  captchaDialog.value = true;
});
const captchaCompleted = (captchaResult) => {
  alert(`验证码验证成功: ${captchaResult}`);
  captchaDialog.value = false;
};
</script>
