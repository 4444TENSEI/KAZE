<template>
  <v-container class="d-flex align-center justify-center pa-0">
    <v-card
      class="flex-d pt-6 pb-6 px-6 mx-6"
      width="340"
      max-width="400"
      rounded="xl"
    >
      <div class="d-flex align-center mt-0 mb-6">
        <v-btn
          icon="mdi-arrow-left-bold"
          to="login"
          size="56"
          color="info"
          variant="tonal"
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
          class="mb-4"
          hide-details="false"
          :label="nicknameLabel"
          clearable
          required
          rounded="pill"
          autocomplete="username"
          variant="outlined"
          v-model="nickname.value.value"
          :color="nickname.errorMessage.value ? 'error' : 'info'"
        ></v-text-field>

        <v-text-field
          prepend-inner-icon="mdi-email"
          class="mb-4"
          hide-details="false"
          :label="emailLabel"
          clearable
          required
          rounded="pill"
          autocomplete="email"
          variant="outlined"
          v-model="email.value.value"
          :color="email.errorMessage.value ? 'error' : 'info'"
        ></v-text-field>

        <v-text-field
          prepend-inner-icon="mdi-lock"
          class="mb-4"
          hide-details="false"
          autocomplete="current-password"
          clearable
          rounded="pill"
          variant="outlined"
          :hide-details="auto"
          details="66"
          :label="passwordLabel"
          :type="pswVisible ? 'text' : 'password'"
          :append-inner-icon="pswVisible ? 'mdi-eye-off' : 'mdi-eye'"
          @click:append-inner="pswVisible = !pswVisible"
          v-model="password.value.value"
          :color="password.errorMessage.value ? 'error' : 'info'"
        >
        </v-text-field>

        <v-text-field
          prepend-inner-icon="mdi-shield-lock"
          class="mb-6"
          hide-details="false"
          :label="password2Label"
          clearable
          rounded="pill"
          variant="outlined"
          autocomplete="new-password"
          :hide-details="auto"
          details="66"
          :type="pswVisible2 ? 'text' : 'password'"
          :append-inner-icon="pswVisible2 ? 'mdi-eye-off' : 'mdi-eye'"
          @click:append-inner="pswVisible2 = !pswVisible2"
          v-model="password2.value.value"
          :color="password2.errorMessage.value ? 'error' : 'info'"
        >
        </v-text-field>
      </form>

      <v-dialog v-model="captchaDialog">
        <Captcha />
      </v-dialog>

      <v-btn
        text="发送验证码"
        class="text-h6"
        color="info"
        height="56"
        rounded="pill"
        block
        variant="elevated"
        @click="submitForm"
        :loading="loading"
        type="submit"
      /> </v-card
  ></v-container>
</template>

<script setup>
import { useField, useForm } from "vee-validate";
import { ref, computed } from "vue";
// 注册输入框校验
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
// 表单提交
const submit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
});
// 输入框显示隐藏小眼睛
const pswVisible = ref(false);
const pswVisible2 = ref(false);
// 将错误信息显示到label中
const nicknameLabel = computed(() => {
  return nickname.errorMessage.value && nickname.value.value
    ? nickname.errorMessage.value
    : "用户名";
});
const emailLabel = computed(() => {
  return email.errorMessage.value && email.value.value
    ? email.errorMessage.value
    : "邮箱账号";
});
const passwordLabel = computed(() => {
  return password.errorMessage.value && password.value.value
    ? password.errorMessage.value
    : "密码";
});
const password2Label = computed(() => {
  return password2.errorMessage.value && password2.value.value
    ? password2.errorMessage.value
    : "重复密码";
});

// 验证码弹窗
const captchaDialog = ref(false);
const submitForm = handleSubmit(async (values) => {
  captchaDialog.value = true;
});
const captchaCompleted = (captchaResult) => {
  alert(`验证码验证成功: ${captchaResult}`);
  captchaDialog.value = false;
};
</script>
