import { defineStore } from 'pinia'

const useLoadingStore = defineStore('loading', () => {
  const loading = ref(false)
  /**
   * 设置loading状态
   */
  function setLoading(state: boolean): void {
    loading.value = state
  }

  return { setLoading, loading }
})

export default useLoadingStore
