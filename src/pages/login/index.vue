<template>
  <body class="flex-container justify-center align-center">
    <NavLogin />
    <v-card class="card-login pa-6" rounded="xl" elevation="4">
      <div class="d-flex justify-center align-center mb-8 mt-2">
        <v-img class="mr-4" height="36" inline src="@/assets/logo.png" width="36" />
        <h1 class="cursor-default">{{ $t('action.login') }}</h1>
      </div>
      <!-- 确保表单正确包裹所有提交按钮 -->
      <form @submit.prevent="onSubmit">
        <v-text-field
          v-model="email.value.value"
          autocomplete="email"
          class="mb-4"
          :color="email.errorMessage.value ? 'error' : 'info'"
          :label="emailLabel"
          prepend-inner-icon="mdi-email"
          required
        />
        <v-text-field
          v-model="password.value.value"
          :append-inner-icon="pswVisible ? 'mdi-eye-off' : 'mdi-eye'"
          autocomplete="current-password"
          class="mb-2"
          :color="password.errorMessage.value ? 'error' : 'info'"
          :counter="20"
          :label="passwordLabel"
          prepend-inner-icon="mdi-lock"
          :type="pswVisible ? 'text' : 'password'"
          @click:append-inner="pswVisible = !pswVisible"
        />
        <div class="d-flex mb-2">
          <v-checkbox-btn color="info" :label="$t('action.remember')" />
          <v-btn
            height="42"
            rounded="pill"
            :text="$t('action.forget')"
            variant="flat"
            @click="forget"
          />
          <v-btn
            height="42"
            rounded="pill"
            :text="$t('action.register')"
            to="/register"
            variant="flat"
          />
        </div>
        <div class="mb-3 d-flex align-center">
          <v-btn
            class="text-h6 mr-2"
            color="primary"
            icon="mdi-broom"
            rounded="circle"
            size="56"
            variant="tonal"
            @click="handleReset"
          />
          <!-- 登录按钮作为 form 提交的一部分 -->
          <v-btn
            class="text-h6 flex-1-0"
            color="info"
            height="56"
            :loading="getLoading()"
            rounded="pill"
            :text="$t('action.login')"
            variant="elevated"
            type="submit"
          />
        </div>
      </form>
      <v-divider class="mb-2">
        <div class="text-no-wrap text-grey mb-2">{{ $t('placeholder.otherWays') }}</div>
      </v-divider>
      <div class="d-flex align-center justify-center ga-2">
        <v-btn icon color="primary" title="GitHub" variant="tonal" @click="loginByOA2('github')">
          <Icon icon="mdi:github" />
        </v-btn>
        <v-btn icon color="error" title="Google" variant="tonal" @click="loginByOA2('google')">
          <Icon icon="mdi:google" />
        </v-btn>
        <v-btn icon color="warning" title="Gitlab" variant="tonal" @click="loginByOA2('gitlab')">
          <Icon icon="mdi:gitlab" />
        </v-btn>
        <v-btn icon color="purple" title="Discord" variant="tonal" @click="loginByOA2('discord')">
          <Icon icon="ic:baseline-discord" />
        </v-btn>
      </div>
    </v-card>
  </body>
</template>

<script lang="ts" setup>
  import { useField, useForm } from 'vee-validate'
  import { loginByEmail, loginByOA2 } from '@/api/user/login'
  import router from '@/router'
  import { LoginForm } from '@/types/login'
  import { useLoadingStore } from '@/stores'

  const { getLoading } = useLoadingStore()

  // 登录输入框校验
  const { handleSubmit, handleReset } = useForm({
    validationSchema: {
      email(value: string) {
        if (!value) return true
        if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
          return true
        }
        return '需要正确的邮箱格式'
      },
      password(value: string) {
        if (!value) return true
        if (value?.length >= 6 && value.length <= 20) return true
        return '密码6-20个字符'
      },
    },
  })
  const email = useField('email')
  const password = useField('password')
  // 输入框显示隐藏小眼睛
  const pswVisible = shallowRef(false)
  // 将错误信息显示到label中
  const emailLabel = computed(() => {
    return email.errorMessage.value && email.value.value
      ? email.errorMessage.value
      : $t('user.email')
  })
  const passwordLabel = computed(() => {
    return password.errorMessage.value && password.value.value
      ? password.errorMessage.value
      : $t('user.password')
  })
  function forget() {
    router.push('/forget')
  }
  // 登录表单提交
  const onSubmit = handleSubmit(formData => {
    loginByEmail(formData as LoginForm)
  })
</script>
