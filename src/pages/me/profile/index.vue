<template>
  <div class="flex-container justify-center">
    <NavBar barTitle="我的资料"></NavBar>
    <v-card>
      <v-list nav>
        <v-list-item
          v-for="field in profileFields"
          :key="field.key"
          link
          @click="onItemClick(field)"
        >
          <v-icon class="mr-6">{{ field.icon }}</v-icon>
          <span>{{ field.label }} {{ field.value }}</span>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
  import { getUserProfile } from '@/api/user/profile'

  // 定义字段枚举
  const fieldMap = [
    { key: 'id', label: 'ID', icon: 'mdi-identifier' },
    { key: 'name', label: '昵称', icon: 'mdi-account' },
    { key: 'email', label: '邮箱', icon: 'mdi-email' },
    { key: 'emailVisibility', label: '邮箱可见性', icon: 'mdi-eye' },
    { key: 'avatar', label: '头像', icon: 'mdi-image' },
    { key: 'background', label: '背景', icon: 'mdi-wallpaper' },
    { key: 'verified', label: '已验证', icon: 'mdi-check-circle' },
  ]

  // 用户数据
  const profileMap = reactive({
    id: 0,
    name: '',
    email: '',
    emailVisibility: false,
    avatar: '',
    background: '',
    verified: false,
  })

  // 生成动态展示字段
  const profileFields = computed(() =>
    fieldMap.map(field => ({
      ...field,
      value: profileMap[field.key as keyof typeof profileMap] ?? '无',
    })),
  )

  // 点击列表项（当前无功能）
  const onItemClick = (field: { key: string; label: string; value: any }) => {
    console.log(`点击了字段: ${field.label}`, field)
  }

  // 获取用户信息
  const getProfileInfo = async () => {
    const userProfile = await getUserProfile().catch(err => console.error('获取用户信息失败', err))
    Object.assign(profileMap, userProfile)
  }

  onMounted(() => {
    getProfileInfo()
  })
</script>

<style lang="scss" scoped>
  .v-card {
    width: 720px;
    margin: 1rem;
    max-width: 94vw;
  }
</style>
