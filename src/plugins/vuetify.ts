// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { pl, zhHans } from 'vuetify/locale'
import { THEME_MAP } from '@/hooks/map'
import { md3 } from 'vuetify/blueprints'
const KazeTheme = useStorage(THEME_MAP, '#141E28').value
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  blueprint: md3,
  defaults: {
    VTextField: {
      variant: 'outlined',
      rounded: 'pill',
      clearable: true,
      size: 'sm',
    },
    VCard: { rounded: 'xl' },
  },
  locale: {
    locale: 'zhHans',
    fallback: 'en',
    messages: { zhHans, pl },
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: { colors: { KazeTheme } },
      dark: { colors: { KazeTheme } },
    },
  },
})
