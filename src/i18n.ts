import { createI18n } from 'vue-i18n'

/** 支持的语言 */
const SUPPORT_LANGS = ['zh', 'en', 'ja']
/** 默认语言 */
const DEFAULT_LANG = 'en'

/** 获取支持的语言 */
const checkLang = (lang: string) =>
  SUPPORT_LANGS.find(l => l.toLowerCase() === lang.toLowerCase().split('-')[0]) || DEFAULT_LANG

/** 持久化语言偏好 */
const langStorage = useStorage('app-lang', checkLang(navigator.language))

/** 创建 i18n 实例 */
const i18n = createI18n({
  legacy: false,
  locale: langStorage.value,
  fallbackLocale: DEFAULT_LANG,
  messages: {},
})

/** 动态加载语言文件 */
const loadLangAsync = async (lang: string = langStorage.value) => {
  const targetLang = checkLang(lang)
  if (!i18n.global.availableLocales.includes(targetLang)) {
    import(`@/locale/${targetLang}.json`)
      .then(messages => {
        i18n.global.setLocaleMessage(targetLang, messages.default)
        console.log(`载入语言成功: ${targetLang}`)
        console.log(`当前语言: ${i18n.global.locale.value}`)
      })
      .catch(error => {
        console.error(`无法载入语言: ${targetLang}`, error)
        console.log(`当前语言: ${i18n.global.locale.value}`)
      })
  }
  langStorage.value = i18n.global.locale.value = document.documentElement.lang = targetLang
}

/** 初始化载入语言 */
loadLangAsync()

export const $t = i18n.global.t
export default i18n
