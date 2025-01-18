/**
 * 获取一天之中所处时间段
 * @returns 当前所处时间段
 */
function greeting() {
  const hour = new Date().getHours()
  return hour < 6
    ? $t('message.greeting.earlyMorning')
    : hour < 12
    ? $t('message.greeting.morning')
    : hour < 14
    ? $t('message.greeting.noon')
    : hour < 18
    ? $t('message.greeting.afternoon')
    : $t('message.greeting.night')
}

export { greeting }
