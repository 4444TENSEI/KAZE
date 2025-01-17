type MsgType = 'success' | 'error' | 'warning' | 'info' | undefined

export interface toastConfig {
  id: string
  message: string
  type: MsgType
  timeout: number
}

export const newToast = ref<toastConfig>({
  id: 'MsgID' + 0,
  message: '',
  type: undefined,
  timeout: 0,
})

export const toast = (message: string, type?: MsgType, timeout?: number) => {
  newToast.value.id = Math.random().toString()
  newToast.value.message = message
  newToast.value.type = type ?? 'info'
  newToast.value.timeout = timeout ?? 3000
}
