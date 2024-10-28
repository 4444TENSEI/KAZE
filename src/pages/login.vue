<template>
  <v-contain
    class="bg-surface-light d-flex pa-ma-0 h-100"
    :style="{ backgroundImage: `url(${randomBackgroundUrl})` }"
  >
    <!-- 提醒：后期加入v-col的话，组件默认12列-->
    <v-row class="d-flex" align="center" justify="center">
      <v-card
        class="flex-1-1 pt-8 pb-6 px-6 mx-6 opacity-90"
        max-width="400"
        rounded="xl"
      >
        <div class="d-flex justify-center align-center mt-0 mb-6">
          <v-img
            class="mr-3"
            inline
            width="48"
            rounded="circle"
            draggable="false"
            src="https://testingcf.jsdelivr.net/gh/4444TENSEI/CDN@master/img/icon/angeldog/angeldog.ico"
          />
          <p
            class="font-weight-black"
            style="
              font-size: 3rem;
              letter-spacing: 0.1em;
              cursor: default;
              line-height: 1;
            "
          >
            KAZE
          </p>
        </div>

        <div>
          <v-text-field
            placeholder="手机号 / 邮箱"
            prepend-inner-icon="mdi-account"
            clearable
            rounded="pill"
            :hide-details="false"
            variant="solo-filled"
          >
          </v-text-field>

          <v-text-field
            prepend-inner-icon="mdi-lock"
            placeholder="密码"
            clearable
            rounded="pill"
            :hide-details="false"
            variant="solo-filled"
            :type="visible ? 'text' : 'password'"
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            @click:append-inner="visible = !visible"
          >
          </v-text-field>
        </div>

        <div class="d-flex mb-4">
          <v-checkbox-btn color="primary" label="记住我" />
          <v-btn rounded="pill" size="large" text="找回" variant="flat" />
          <v-btn rounded="pill" size="large" text="注册" variant="flat" />
        </div>
        <v-sheet>
          <v-btn
            block
            class="text-h6 mb-6"
            color="info"
            flat
            height="56"
            rounded="pill"
            text="登录"
            variant="elevated"
          />
        </v-sheet>

        <v-divider class="mb-4">
          <div class="text-no-wrap text-grey mb-4">其他方式</div>
        </v-divider>

        <div class="d-flex align-center justify-center ga-4">
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
    </v-row>
  </v-contain>
</template>

<script setup lang="ts">
import { useBackgroundStore } from "@/stores/backgroundStore";

// 随机页面背景
const backgroundStore = useBackgroundStore();
const randomBackgroundUrl = computed(
  () => backgroundStore.getCurrentBackgroundUrl
);

// 密码显示隐藏
const visible = shallowRef(false);

onMounted(() => {
  // 随机背景
  if (!backgroundStore.getCurrentBackgroundUrl) {
    backgroundStore.setRandomBackground();
  }
});
</script>

<style scoped>
/* 背景图 */
.bg-surface-light {
  background-size: cover;
  background-position: center;
}

input:-internal-autofill-selected {
  background-color: rgb(0, 0, 0);
}
</style>
