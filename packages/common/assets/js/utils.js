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
    param === "" ||
    (!param) instanceof File ||
    (typeof param === "array" ? param.length === 0 : false) ||
    ((!param) instanceof File && typeof param === "object"
      ? Object.keys(param).length === 0
      : false)
  );
};

/**
 * 00:00:00 또는 00:00 포멧으로 된 24시 단위의 시간을
 * 오전/오후 구분해서 { 오전|오후 0시 0분 } 형태로 리턴
 *
 * @param {string} time
 * @returns
 */
const changeTimeFormatAmPm = (time) => {
  if (time === undefined || time === null || time === "") return "";

  let hour = parseInt(time.split(":")[0]);
  const min = time.split(":")[1];

  const ampm = hour >= 12 ? "오후" : "오전";
  hour = hour > 12 ? (hour -= 12) : hour;

  return `${ampm} ${hour}시 ${min}분`;
};

/**
 * 0000 포멧으로 된 시간을 00:00 포멧으로 변경
 *
 * @param {string} time
 * @returns
 */
const changeTimeFormatAddDot = (time) => {
  if (time === undefined || time === null || time === "") return "";

  return time.replace(/(\d)(?=(?:\d{2})+(?!\d))/g, "$1:");
};

/**
 * 원하는 길이만큼 앞에 0을 붙여서 리턴
 *
 * @param {number | string} x
 * @param {number} len
 */
const zeroStr = (x, len) => {
  return String(x).padStart(len, "0");
};

/**
 * 숫자로만 된 전화번호를 -를 포함한 전화번호로 변경
 *
 * @param {string} text
 * @returns
 */
const rexFormatPhone = (text) => {
  return text
    ?.replace(/[^0-9]/g, "")
    ?.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, "$1-$2-$3");
};

/**
 * blob data를 활용해 file download
 * 파일명은 fileName.ext
 *
 * @param {blob} data
 * @param {string} fileName
 * @param {string} ext
 */
const fileDownload = (data, fileName, ext) => {
  const url = window.URL.createObjectURL(new Blob([data]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `${fileName}.${ext}`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  alert(navigator.userAgent);
};

/**
 * base64 data를 활용해 file download
 * 파일명은 fileName.ext
 *
 * @param {string} base64
 * @param {string} fileName
 * @param {string} ext
 */
const fileDownloadBase64 = (base64, fileName, ext) => {
  const imageData = atob(base64.split(",")[1]);

  const arraybuffer = new ArrayBuffer(imageData.length);
  const view = new Uint8Array(arraybuffer);

  for (let i = 0; i < imageData.length; i++) {
    view[i] = imageData.charCodeAt(i) & 0xff;
  }

  const contentType = base64.split(":")[1].split(";")[0];

  const blob = new Blob([arraybuffer], { type: contentType });

  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `${fileName}.${ext}`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * base64 데이터로 이루어진 pdf 파일에 대한 미리보기 설정
 *
 * @param {string} base64
 */
const filePreviewBase64Pdf = (base64) => {
  const binaryPdf = atob(base64);

  const pdfBytes = new Uint8Array(binaryPdf.length);
  for (let i = 0; i < binaryPdf.length; i++) {
    pdfBytes[i] = binaryPdf.charCodeAt(i);
  }

  return pdfjsLib.getDocument(pdfBytes).promise.then(function (pdf) {
    return new Promise((resolve) => {
      pdf.getPage(1).then(function (page) {
        const canvas = document.createElement("canvas");
        canvas.width = page.view[2];
        canvas.height = page.view[3];

        const context = canvas.getContext("2d");

        page
          .render({
            canvasContext: context,
            viewport: page.view,
          })
          .promise.then(function () {
            const imageDataURL = canvas.toDataURL("image/png");
            resolve(imageDataURL);
          });
      });
    });
  });
};

/**
 * 숫자만 입력 가능하게 숫자 제외한 나머지 값들은 제거해서 리턴
 *
 * @param {string} str
 */
const onlyNumber = (str) => {
  return (str || "").replace(/\D/gi, "");
};

/**
 * 아이디 validation
 * 영문, 숫자만 허용한 5자리 이상.
 *
 * @param {string} str
 */
const isValidId = (str) => {
  const regex = /^[a-zA-Z0-9]{5,}$/;
  return regex.test(str || "");
};

/**
 * 비밀번호 validation
 * 영문, 숫자, 특수문자를 조합한 8자리 이상.
 */
const isValidPassword = (password) => {
  const regex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"])[A-Za-z\d\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]{8,}$/;
  return regex.test(password);
};

/**
 * 돈 입력되면 한글로 변경
 *
 * @param {string} num
 */
const convertToKoreanCurrency = (num) => {
  if (num == "0" || num === "") return "영";
  const number = ["영", "일", "이", "삼", "사", "오", "육", "칠", "팔", "구"];
  const unit = ["", "만", "억", "조"];
  const smallUnit = ["천", "백", "십", ""];

  let result = []; //변환된 값을 저장할 배열

  var unitCnt = Math.ceil(num.length / 4); //단위 갯수. 숫자 10000은 일단위와 만단위 2개이다.
  num = num.padStart(unitCnt * 4, "0"); //4자리 값이 되도록 0을 채운다

  const regexp = /[\w\W]{4}/g; //4자리 단위로 숫자 분리
  const array = num.match(regexp); //낮은 자릿수에서 높은 자릿수 순으로 값을 만든다(그래야 자릿수 계산이 편하다)

  for (let i = array.length - 1, unitCnt = 0; i >= 0; i--, unitCnt++) {
    const hanValue = _makeHan(array[i]); //한글로 변환된 숫자
    if (hanValue == "")
      //값이 없을땐 해당 단위의 값이 모두 0이란 뜻.
      continue;

    result.unshift(hanValue + unit[unitCnt]); //unshift는 항상 배열의 앞에 넣는다.
  }

  function _makeHan(text) {
    let str = "";
    for (let i = 0; i < text.length; i++) {
      const num = text[i];
      if (num == "0")
        //0은 읽지 않는다
        continue;
      str += number[num] + smallUnit[i];
    }
    return str;
  }
  return result.join("");
};

export {
  changeTimeFormatAddDot,
  changeTimeFormatAmPm,
  convertToKoreanCurrency,
  fileDownload,
  fileDownloadBase64,
  filePreviewBase64Pdf,
  isEmpty,
  onlyNumber,
  rexFormatPhone,
  zeroStr,
  isValidId,
  isValidPassword,
};
