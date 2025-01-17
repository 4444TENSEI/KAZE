import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'
import App from './App.vue'
import { pocketBaseSymbol } from '@/hooks/pocketbase/injectionSymbols'
import pbServer from '@/hooks/pocketbase'
import '@/styles/style.scss'
import '@/api'

const app = createApp(App)

registerPlugins(app)

app.provide(pocketBaseSymbol, pbServer)

app.mount('#app')
