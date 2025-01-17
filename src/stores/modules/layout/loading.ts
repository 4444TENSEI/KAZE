import { defineStore } from 'pinia'

const useLoadingStore = defineStore('loading', () => {
  const isLoading = ref(false)
  /**
   * 设置loading状态
   */
  function setLoading(enable: boolean): void {
    isLoading.value = enable
  }

  /**
   * 查询loading状态
   */
  function getLoading(): boolean {
    return isLoading.value
  }

  return { setLoading, getLoading }
})

export default useLoadingStore
