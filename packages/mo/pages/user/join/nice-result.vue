<template>
  <div></div>
</template>

<script setup>
onMounted(() => {
  const urlSearch = new URLSearchParams(window.location.search);
  const status = urlSearch.get("status");
  const name = decodingBase64(urlSearch.get("name"));
  const mobileNo = decodingBase64(urlSearch.get("mobileNo"));
  const responseNo = decodingBase64(urlSearch.get("responseNo"));

  if (status === "200") {
    sendData(name, mobileNo, responseNo);
  } else {
    alert("이미 가입된 이력이 있습니다.");
    window.close();
  }
});
const sendData = (name, phone, responseNo) => {
  window.opener.postMessage({ name, phone, responseNo }, "*");
  window.close();
};

const decodingBase64 = (str) => {
  const binaryString = atob(str);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  const decoder = new TextDecoder("utf-8");
  const decodedString = decoder.decode(bytes);
  return decodedString;
};
</script>
