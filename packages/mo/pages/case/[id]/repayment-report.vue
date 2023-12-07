<template>
  <NuxtLayout name="dialog-header" headerTitle="상환보고">
    <div class="dialog-wrapper">
      <div class="container">
        <div class="inner-body">
          <div class="forms">
            <div class="form-group">
              <div class="label">
                <label for="" class="form-label">잔금일 기준 상환업무</label>
              </div>
              <DropDown
                placeholder="선택하기"
                :options="options"
                :selected-text="selectedText"
                @click-option="handlerClickOption"
              />
            </div>
            <div class="form-group">
              <div class="label">
                <label for="" class="form-label">상환영수증</label>
              </div>
              <div class="form-input">
                <input ref="remitFileList" type="file" multiple @change="handlerChangeRemitFileList">
                <p class="input-file" @click="handlerClickRemitFileList">{{ remitFileListText }} <img src="/img/icon/file-gray.png" alt=""></p>
              </div>
            </div>
            <div class="form-group">
              <div class="label">
                <label for="" class="form-label">말소확인증</label>
                <span class="form-warning">말소비입금전표, 말소의뢰서로 대체 가능</span>
              </div>
              <div class="form-input">
                <input ref="profFileList" type="file" multiple @change="handlerChangeProfFileList">
                <p class="input-file" @click="handlerClickProfFileList">{{ profFileListText }} <img src="/img/icon/file-gray.png" alt=""></p>
              </div>
            </div>
            <div class="form-group">
              <div class="label">
                <label for="" class="form-label">기타첨부서류</label>
              </div>
              <div class="form-input">
                <input ref="etcFileList" type="file" multiple @change="handlerChangeEtcFileList">
                <p class="input-file" @click="handlerClickEtcFileList">{{ etcFileListText }} <img src="/img/icon/file-gray.png" alt=""></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div>
          <CommonBottomButton
              id="btn-send"
              text="상환보고"
              backgroundColor="#000000" height="60px" width="100%" color="#fff"
              :font-weight="700"
              @handler-click-button="handlerClickReport"
          />
        </div>
      </div>
    </div>
    <CommonAlertModal
      v-if="isSuccessModalShow"
      text="상환보고가 완료되었습니다."
      @handler-click-button="toggleSuccessModal"
    />
  </NuxtLayout>
</template>

<script setup>
import {ref, computed, onMounted} from "vue";
import {useRoute} from "vue-router";

import { tradeCaseRepay } from '~/services/tradeCaseRepay.js'

import DropDown from '@priros/common/components/form/DropDown'
import CommonBottomButton from '@priros/common/components/button/CommonBottomButton.vue'
import CommonAlertModal from '@priros/common/components/modal/CommonAlertModal.vue'

definePageMeta({
  layout: false
});

const tradeCaseId = useRoute().params.id
const form = ref({
  repaySubjectYn: '',
  remitFileList: [],
  profFileList: [],
  etcFileList: [],
})
const options = [
  {
    text: '상환보고 대상이 있습니다.',
    value: 'Y'
  },
  {
    text: '상환보고 대상이 없습니다.',
    value: 'N'
  },
]
const selectedText = computed(() => 
  form.value.repaySubjectYn === 'Y' ?
    '상환보고 대상이 있습니다.' :
  form.value.repaySubjectYn === 'N' ?
    '상환보고 대상이 없습니다.'
  : ''  
)

const remitFileList = ref(null)
const remitFileListObj = ref(null)
const profFileList = ref(null)
const profFileListObj = ref(null)
const etcFileList = ref(null)
const etcFileListObj = ref(null)

const handlerClickRemitFileList = () => {
  remitFileList.value.click()
}
const handlerChangeRemitFileList = (e) => {
  remitFileListObj.value = Array.from(e.target.files)
}
const remitFileListText = computed(() => {
  return remitFileListObj.value !== null ?
    `${remitFileListObj.value[0].name} 포함 ${remitFileListObj.value.length}개` :
    form.value.remitFileList.length > 0 ?
    `${form.value.remitFileList[0].fileName} 포함 ${form.value.remitFileList.length}개` :
    '상환영수증을 첨부해주세요'
})

const handlerClickProfFileList = () => {
  profFileList.value.click()
}
const handlerChangeProfFileList = (e) => {
  profFileListObj.value = Array.from(e.target.files)
}
const profFileListText = computed(() => {
  return profFileListObj.value !== null ?
    `${profFileListObj.value[0].name} 포함 ${profFileListObj.value.length}개` :
    form.value.profFileList.length > 0 ?
    `${form.value.profFileList[0].fileName} 포함 ${form.value.profFileList.length}개` :
    '말소확인증을 첨부해주세요'
})

const handlerClickEtcFileList = () => {
  etcFileList.value.click()
}
const handlerChangeEtcFileList = (e) => {
  etcFileListObj.value = Array.from(e.target.files)
}
const etcFileListText = computed(() => {
  return etcFileListObj.value !== null ?
    `${etcFileListObj.value[0].name} 포함 ${etcFileListObj.value.length}개` :
    form.value.etcFileList.length > 0 ?
    `${form.value.etcFileList[0].fileName} 포함 ${form.value.etcFileList.length}개` :
    '기타 추가적인 서류가 있다면 첨부해주세요'
})

const isSuccess = computed(() => {
  return (
    form.value.repaySubjectYn !== '' &&
    (form.value.remitFileList.length > 0 || remitFileListObj.value !== null) &&
    (form.value.profFileList.length > 0 || profFileListObj.value !== null) 
  )
})

onMounted(() => {
  tradeCaseRepay.get(tradeCaseId)
    .then(({data}) => {
      if(data) {
        form.value.repaySubjectYn = data.repaySubjectYn
        form.value.remitFileList = data.remitFileList
        form.value.profFileList = data.profFileList
        form.value.etcFileList = data.etcFileList
      }
    })
    .catch(e => {
      console.log(e)
    })
})

const handlerClickOption = ({value}) => {
  form.value.repaySubjectYn = value
}

const isSuccessModalShow = ref(false)
const toggleSuccessModal = () => {
  isSuccessModalShow.value = !isSuccessModalShow.value
}

const handlerClickReport = () => {
  if(!isSuccess.value) {
    if(form.value.repaySubjectYn === '') {
      alert('잔금일 기준 상환업무를 선택해주세요.')
    } else if(form.value.remitFileList.length === 0 && remitFileListObj.value === null) {
      alert('상환영수증을 첨부해주세요.')
    } else if(form.value.profFileList.length === 0 && profFileListObj.value === null) {
      alert('말소확인증을 첨부해주세요.')
    }
    return false
  }

  const formData = new FormData()
  formData.append('repaySubjectYn', form.value.repaySubjectYn)
  if(remitFileListObj.value !== null) {
    remitFileListObj.value.forEach(file => {
      formData.append('remitFileList', file)
    })
  }
  if(profFileListObj.value !== null) {
    profFileListObj.value.forEach(file => {
      formData.append('profFileList', file)
    })
  }
  if(etcFileListObj.value !== null) {
    etcFileListObj.value.forEach(file => {
      formData.append('etcFileList', file)
    })
  }

  tradeCaseRepay.post(tradeCaseId, formData)
    .then(() => {
      toggleSuccessModal()
    })
    .catch(e => {
      alert(e.response.data.message)
    })

  console.log('pass')
}

</script>

<style scoped lang="scss">
@import '@priros/common/assets/scss/views/dialog';
</style>