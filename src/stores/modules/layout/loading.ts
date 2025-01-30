import { defineStore } from 'pinia'

const useLoadingStore = defineStore('loading', () => {
  const loading = ref(false)

  /** 设置全局加载状态 */
  function setLoading(state: boolean) {
    loading.value = state
  }

  /** 获取全局加载状态 */
  function getLoading() {
    return loading.value
  }

  return { setLoading, getLoading }
})

export default useLoadingStore
