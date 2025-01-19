import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'
import 'notivue/notifications.css'
import 'notivue/animations.css'
import 'notivue/notifications-progress.css'
import App from '@/App.vue'
import '@/styles/style.scss'
import '@/api'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
