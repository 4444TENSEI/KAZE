<template>
  <body class="flex-container">
    <SpeedBtn />
    <NavLogin />
    <v-card class="card-login pa-6">
      <div class="d-flex align-center mt-3 mb-8">
        <v-btn
          class="position-absolute"
          color="info"
          icon="mdi-arrow-left-bold"
          size="56"
          to="login"
          variant="tonal"
        />
        <p class="font-weight-black cursor-default mx-auto text-h4">注册</p>
      </div>
      <form @submit.prevent="submit">
        <v-text-field
          v-model="nickname.value.value"
          autocomplete="username"
          class="mb-4"
          clearable
          :color="nickname.errorMessage.value ? 'error' : 'info'"
          :hide-details="false"
          :label="nicknameLabel"
          prepend-inner-icon="mdi-cat"
          required
          rounded="pill"
        ></v-text-field>
        <v-text-field
          v-model="email.value.value"
          autocomplete="email"
          class="mb-4"
          clearable
          :color="email.errorMessage.value ? 'error' : 'info'"
          :hide-details="false"
          :label="emailLabel"
          prepend-inner-icon="mdi-email"
          required
          rounded="pill"
        ></v-text-field>
        <v-text-field
          v-model="password.value.value"
          :append-inner-icon="pswVisible ? 'mdi-eye-off' : 'mdi-eye'"
          autocomplete="current-password"
          class="mb-4"
          clearable
          :color="password.errorMessage.value ? 'error' : 'info'"
          details="66"
          :hide-details="false"
          :label="passwordLabel"
          prepend-inner-icon="mdi-lock"
          rounded="pill"
          :type="pswVisible ? 'text' : 'password'"
          @click:append-inner="pswVisible = !pswVisible"
        >
        </v-text-field>
        <v-text-field
          v-model="password2.value.value"
          :append-inner-icon="pswVisible2 ? 'mdi-eye-off' : 'mdi-eye'"
          autocomplete="new-password"
          class="mb-6"
          clearable
          :color="password2.errorMessage.value ? 'error' : 'info'"
          details="66"
          :hide-details="false"
          :label="password2Label"
          prepend-inner-icon="mdi-shield-lock"
          rounded="pill"
          :type="pswVisible2 ? 'text' : 'password'"
          @click:append-inner="pswVisible2 = !pswVisible2"
        >
        </v-text-field>
      </form>
      <v-dialog v-model="captchaDialog">
        <Captcha />
      </v-dialog>
      <v-btn
        block
        class="text-h6"
        color="info"
        height="56"
        rounded="pill"
        text="发送验证码"
        type="submit"
        variant="elevated"
        @click="submitForm"
      />
    </v-card>
  </body>
</template>
<script lang="ts" setup>
  import { useField, useForm } from 'vee-validate'
  import { computed, ref } from 'vue'
  // 注册输入框校验
  const { handleSubmit } = useForm({
    validationSchema: {
      nickname(value: string) {
        if (value?.length >= 2) return true
        return '用户名至少2个字'
      },
      email(value: string) {
        if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true
        return '请输入正确的邮箱'
      },
      password(value: string) {
        if (value?.length >= 6) return true
        return '密码6-20个字符'
      },
      password2(value: string) {
        if (value === password.value.value) return true
        return '两次输入的密码不一致'
      },
    },
  })
  const nickname = useField('nickname')
  const email = useField('email')
  const password = useField('password')
  const password2 = useField('password2')
  // 表单提交
  const submit = handleSubmit(values => {
    alert(JSON.stringify(values, null, 2))
  })
  // 输入框显示隐藏小眼睛
  const pswVisible = ref(false)
  const pswVisible2 = ref(false)
  // 将错误信息显示到label中
  const nicknameLabel = computed(() => {
    return nickname.errorMessage.value && nickname.value.value
      ? nickname.errorMessage.value
      : '用户名'
  })
  const emailLabel = computed(() => {
    return email.errorMessage.value && email.value.value ? email.errorMessage.value : '邮箱'
  })
  const passwordLabel = computed(() => {
    return password.errorMessage.value && password.value.value
      ? password.errorMessage.value
      : '密码'
  })
  const password2Label = computed(() => {
    return password2.errorMessage.value && password2.value.value
      ? password2.errorMessage.value
      : '重复密码'
  })
  // 验证码弹窗
  const captchaDialog = ref(false)
  const submitForm = handleSubmit(async () => {
    captchaDialog.value = true
  })
</script>
