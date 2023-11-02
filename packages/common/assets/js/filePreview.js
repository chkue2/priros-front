/**
 * file : input file => event.target.file|files[index]
 * elementId : 미리보기 보여줄 img 태그 id 값
 */
const base64 = (file, elementId) => {
  return new Promise(resolve => {
    let f = new FileReader()
    f.onload = e => {
      resolve(e.target.result)
      const previewImage = document.getElementById(elementId)
      previewImage.src = e.target.result
    }

    f.readAsDataURL(file)
  })
}

export { base64 }