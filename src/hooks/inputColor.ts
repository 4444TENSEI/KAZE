/**
 * 根据字段的错误状态返回输入框的颜色
 * @param field - vee-validate 的 useField 返回值
 * @returns 颜色字符串（例如 'error' 或 'info'）
 */
const inputColor = (field: string | undefined) => {
  return field ? 'error' : 'info'
}

export { inputColor }
