import { registerPlugins } from '@/plugins'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import { pocketBaseSymbol } from '@/hooks/pocketbase/injectionSymbols'
import pbServer from '@/hooks/pocketbase'
import '@/assets/scss/main.scss'
import '@/api'

const app = createApp(App)
const i18n = createI18n({})

registerPlugins(app)
app.provide(pocketBaseSymbol, pbServer)

app.use(i18n)
app.mount('#app')
