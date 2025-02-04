/**
 * 根据输入框文本校验状态，返回对应颜色
 * @param errField 输入框文本校验状态
 * @returns 颜色名称
 */
const inputColor = (errField: string | undefined) => {
  return errField ? 'error' : 'info'
}

export { inputColor }
