import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'

import App from '@/App.vue'

import '@/hooks/fingerprint'
import '@/api'

import 'notivue/notifications.css'
import 'notivue/animations.css'
import 'notivue/notifications-progress.css'
import '@/styles/style.scss'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
