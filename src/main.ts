
// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import '@/assets/main.css'
// Composables
import { createApp } from 'vue'
// 多语言
import { createI18n } from 'vue-i18n'

const app = createApp(App)
const i18n = createI18n({
  locale: 'zh',
  fallbackLocale: 'en',
  messages: {
    en: {
      mesasge: {
        hello: 'hello world',
      },
    },
    zh: {
      message: {
        hello: '你好世界',
      },
    },
  },
});

registerPlugins(app)

app.use(i18n)
app.mount('#app')



