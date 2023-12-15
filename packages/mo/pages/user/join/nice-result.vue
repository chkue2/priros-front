<template>
  <div>
    <button @click="sendData">send data</button>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const urlSearch = new URLSearchParams(window.location.search)
  const encData = urlSearch.get('enc_data')
  const tokenVersionId = urlSearch.get('token_version_id')
  
  console.log(encData, tokenVersionId)
})
const sendData = () => {
  window.opener.postMessage({
    name: 'test',
    phone: '01012341234',
    responseNumber: 'test'
  }, '*')
  // window.close()
}
</script>