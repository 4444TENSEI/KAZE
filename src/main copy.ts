
// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// 全局CSS
import '@/assets/css/main.css'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')