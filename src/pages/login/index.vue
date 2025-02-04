<template>
  <body class="flex-container justify-center align-center">
    <NavLogin />
    <v-card class="card-login pa-6" rounded="xl" elevation="4">
      <div class="d-flex justify-center align-center mb-8 mt-2">
        <v-img class="mr-4" height="36" inline src="@/assets/logo.png" width="36" />
        <h1 class="cursor-default">{{ $t('action.login') }}</h1>
      </div>
      <!-- 确保表单正确包裹所有提交按钮 -->
      <form>
        <v-text-field
          v-model="email.value.value"
          autocomplete="username"
          class="mb-4"
          :color="inputColor(email.errorMessage.value)"
          :base-color="inputColor(email.errorMessage.value)"
          :label="emailLabel"
          prepend-inner-icon="mdi-email"
          required
        />
        <v-text-field
          v-model="password.value.value"
          :append-inner-icon="pswVisible ? 'mdi-eye-off' : 'mdi-eye'"
          autocomplete="current-password"
          class="mb-2"
          :color="inputColor(password.errorMessage.value)"
          :base-color="inputColor(password.errorMessage.value)"
          :counter="20"
          :label="passwordLabel"
          prepend-inner-icon="mdi-lock"
          :type="pswVisible ? 'text' : 'password'"
          required
          @click:append-inner="pswVisible = !pswVisible"
        />
        <div class="d-flex mb-2">
          <v-checkbox-btn color="info" :label="$t('action.remember')" />
          <v-btn
            height="42"
            rounded="pill"
            :text="$t('action.forget')"
            variant="flat"
            to="/forget"
          />
          <v-btn
            height="42"
            rounded="pill"
            :text="$t('action.register')"
            variant="flat"
            to="/register"
          />
        </div>
        <div class="mb-3 d-flex align-center">
          <v-btn
            class="text-h6 mr-2"
            color="primary"
            icon="mdi-broom"
            rounded="circle"
            size="56"
            variant="outlined"
            @click="handleReset"
          />
          <v-btn
            class="text-h6 flex-1-0"
            color="info"
            height="56"
            rounded="pill"
            :text="$t('action.login')"
            variant="elevated"
            type="submit"
            @click="tryLogin"
          />
        </div>
      </form>
      <v-divider class="mb-2">
        <div class="text-no-wrap text-grey mb-2">{{ $t('placeholder.otherWays') }}</div>
      </v-divider>
      <div class="d-flex align-center justify-center ga-2">
        <v-btn
          icon
          color="##16171B"
          title="GitHub"
          variant="outlined"
          @click="loginByOA2('github')"
        >
          <Icon icon="devicon:github" height="26px" />
        </v-btn>
        <v-btn icon color="#D90215" title="GitHub" variant="outlined" @click="loginByOA2('gitee')">
          <Icon icon="simple-icons:gitee" height="26px" color="#D90215" />
        </v-btn>
        <v-btn icon color="#E4682A" title="Gitlab" variant="outlined" @click="loginByOA2('gitlab')">
          <Icon icon="vscode-icons:file-type-gitlab" height="26px" />
        </v-btn>
        <v-btn
          icon
          color="#4F5EE1"
          title="Discord"
          variant="outlined"
          @click="loginByOA2('discord')"
        >
          <Icon icon="skill-icons:discord" height="24px" />
        </v-btn>
        <v-btn icon color="#EA4335" title="Google" variant="outlined" @click="loginByOA2('google')">
          <Icon icon="devicon:google" height="24px" />
        </v-btn>
      </div>
    </v-card>
  </body>
</template>

<script lang="ts" setup>
  import { useField, useForm } from 'vee-validate'
  import { loginByEmail, loginByOA2 } from '@/api/user/login'
  import { LoginForm } from '@/types/login'
  import { inputColor } from '@/hooks/inputColor'

  // 登录输入框校验
  const { handleSubmit, handleReset } = useForm({
    validationSchema: {
      email(value: string) {
        if (!value) return true
        if (/.+@.+\..+/.test(value)) return true
        return '请输入正确的邮箱格式'
      },
      password(value: string) {
        if (!value) return true
        if (value?.length >= 6 && value.length <= 20) return true
        return '密码至少8个字符'
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
  // 登录按钮
  const tryLogin = handleSubmit(formData => {
    loginByEmail(formData as LoginForm)
  })
</script>
