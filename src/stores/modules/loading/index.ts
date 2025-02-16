import { defineStore } from 'pinia'
import { ref } from 'vue'

const useLoadingStore = defineStore('loading', () => {
  // 使用一个对象来存储多个加载状态
  const loadingStates = ref<Record<string, boolean>>({})

  /** 设置指定名称的加载状态
   * @param name 加载状态的名称
   * @param state 设置状态
   */
  function setLoading(name: string, state: boolean) {
    loadingStates.value[name] = state
  }

  /** 获取指定名称的加载状态
   * @param name 加载状态的名称
   */
  function getLoading(name: string) {
    return loadingStates.value[name] || false
  }

  /** 重置所有加载状态 */
  function resetLoading() {
    loadingStates.value = {}
  }

  return { setLoading, getLoading, resetLoading }
})

export default useLoadingStore