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
    !param instanceof File ||
    (typeof param === 'array' ? param.length === 0 : false) ||
    (!param instanceof File  && typeof param === 'object' ? Object.keys(param).length === 0 : false)
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

/**
 * 0000 포멧으로 된 시간을 00:00 포멧으로 변경
 * 
 * @param {string} time 
 * @returns 
 */
const changeTimeFormatAddDot = (time) => {
  if(time === undefined || time === null || time === '') return ''

  return time.replace(/(\d)(?=(?:\d{2})+(?!\d))/g, '$1:')
}

/**
 * 원하는 길이만큼 앞에 0을 붙여서 리턴
 * 
 * @param {number | string} x 
 * @param {number} len 
 */
const zeroStr = (x, len) => {
  return String(x).padStart(len, '0')
}

/**
 * 숫자로만 된 전화번호를 -를 포함한 전화번호로 변경
 * 
 * @param {string} text 
 * @returns 
 */
const rexFormatPhone = (text) => {
  return text
          ?.replace(/[^0-9]/g, '')
          ?.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, '$1-$2-$3')
}

/**
 * blob data를 활용해 file download
 * 
 * @param {blob} data 
 */
const fileDownload = (data, fileName, ext) => {
  const url = window.URL.createObjectURL(new Blob([data]))
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', `${fileName}.${ext}`)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export {
  isEmpty,
  changeTimeFormatAmPm,
  changeTimeFormatAddDot,
  zeroStr,
  rexFormatPhone,
  fileDownload,
 }