/**
 * parameter에 들어온 값이 빈 값인지 확인
 * 
 * @param {any} param 
 * @returns 
 */
const isEmpty = (param) => {
  return (
    param === undefined ||
    param === null ||
    param === '' ||
    (typeof param === 'array' ? param.length === 0 : false) ||
    (typeof param === 'object' ? Object.keys(param).length === 0 : false)
  )
}

/**
 * 00:00:00 또는 00:00 포멧으로 된 24시 단위의 시간을 
 * 오전/오후 구분해서 { 오전|오후 0시 0분 } 형태로 리턴
 * 
 * @param {string} time 
 * @returns 
 */
const changeTimeFormatAmPm = (time) => {
  if(time === undefined || time === null || time === '') return ''

  let hour = parseInt(time.split(':')[0])
  const min = time.split(':')[1]

  const ampm = hour >= 12 ? '오후' : '오전'
  hour = hour > 12 ? hour -= 12 : hour

  return `${ampm} ${hour}시 ${min}분`
}

export { isEmpty, changeTimeFormatAmPm }