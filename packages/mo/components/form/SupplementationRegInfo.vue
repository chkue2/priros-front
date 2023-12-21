<template>
  <div class="supplementation-container">
    <div class="dialog-wrapper">
      <div class="container">
        <div class="inner-body">
          <div class="forms">
            <div class="form-group">
              <div class="label">
                <label for="" class="form-label">첨부파일</label>
              </div>
              <div class="form-input">
                <input ref="registSupplementFileList" type="file" multiple @change="handlerChangeRegistSupplementFileList">
                <p class="input-file" @click="handlerClickRegistSupplementFileList">{{ fileText }} <img src="/img/icon/file-gray.png" alt=""></p>
                <button class="input-view-button" @click="handlerClickFileViewButton">파일보기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="supplementation-help-text">
      등기필정보 보완요청을 받은 경우에는<br>모든 매수인의 등기필정보를 등록해야 합니다.
    </p>
  </div>
  <button class="info-modal-button" @click="handlerClickSupplementationButton">보완보고</button>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import { tradeCaseDetail } from '~/services/tradeCaseDetail.js'

const props = defineProps({
  tradeCaseId: {
    type: String,
    default: ''
  }
})
const emits = defineEmits(['move-to-files-table', 'close-modal'])

const registSupplementFileList = ref(null)
const registSupplementFileListObj = ref(null)
const fetchedRegistSupplementFileList = ref([])
onMounted(() => {
  tradeCaseDetail.getRegSupplement(props.tradeCaseId)
    .then(({data}) => {
      fetchedRegistSupplementFileList.value = data.registSupplementFileList
    })
})

const fileText = computed(() => {
  return registSupplementFileListObj.value !== null ?
      `${registSupplementFileListObj.value[0].name} 포함 ${registSupplementFileListObj.value.length}개` :
      fetchedRegistSupplementFileList.value.length > 0 ?
      `${fetchedRegistSupplementFileList.value[0].fileName} 포함 ${fetchedRegistSupplementFileList.value.length}개` :
      '파일 첨부 (최대 5개)'
})

const handlerClickRegistSupplementFileList = () => {
  registSupplementFileList.value.click()
}
const handlerChangeRegistSupplementFileList = (e) => {
  registSupplementFileListObj.value = Array.from(e.target.files)
  console.log(registSupplementFileListObj.value)
}

const handlerClickSupplementationButton = () => {
  if(registSupplementFileListObj.value === null) {
    alert('새로운 파일을 첨부해주세요')
    return false
  }

  const formData = new FormData()
  registSupplementFileListObj.value.forEach(file => {
    formData.append('registSupplementFileList', file)
  })
  
  tradeCaseDetail.setRegSupplement(props.tradeCaseId, formData)
    .then(() => {
      alert('보완보고가 정상 처리 되었습니다.')
      emits('close-modal')
    })
    .catch(e => {
      alert(e.response.data.message)
    })
}

const handlerClickFileViewButton = () => {
  emits('move-to-files-table')
}
</script>

<style scoped lang="scss">
@import '@priros/common/assets/scss/views/dialog';
@import '@priros/common/assets/scss/detail-case/index.scss';
.supplementation-container {
  padding: 42px 4px;
  .dialog-wrapper {
    min-height: unset;
  }
}
.supplementation-help-text{
  padding: 38px 0 60px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  line-height: 20px;
}
.input-view-button {
  width: 103px;
  height: 48px;
  border-radius: 5px;
  background-color: #404040;
  border: none;
  color: #ffffff;
  font-size: 16px;
  font-weight: $ft-medium;
}
</style>