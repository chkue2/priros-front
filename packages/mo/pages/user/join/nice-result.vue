<template>
  <div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

import { join } from '~/services/join.js'

onMounted(() => {
  const urlSearch = new URLSearchParams(window.location.search)
  const encData = urlSearch.get('enc_data')
  const tokenApiId = urlSearch.get('token_version_id')
  const integrityValue = urlSearch.get('integrity_value')
  
  join.getNiceInfo({
    encData, tokenApiId, integrityValue
  })
  .then(({data}) => {
    sendData(data.name, data.mobileNo, data.responseNo)
  })
  .catch(e => {
    console.log(e)
  })
})
const sendData = (name, phone, responseNo) => {
  window.opener.postMessage({name, phone, responseNo}, '*')
  window.close()
}
</script>