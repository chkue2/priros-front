<template>
  <NuxtLayout name="dialog-header" headerTitle="회원(사업자)정보">
    <div class="dialog-wrapper">
      <div class="wrapper-inner">
        <div class="forms">
          <div class="form-group">
            <div class="label">
              <label for="" class="form-label">상호</label>
            </div>
            <div class="form-input">
              <input v-model="form['firmName']" type="text" readonly>
            </div>
          </div>
          <div class="form-group">
            <div class="label">
              <label for="" class="form-label">대표자</label>
            </div>
            <div class="form-input">
              <input v-model="form['delegater']" type="text" readonly>
            </div>
          </div>
          <div class="form-group">
            <div class="label">
              <label for="" class="form-label">주소</label>
            </div>
            <div class="form-input">
              <input v-model="form.addr" type="text" readonly>
              <button class="form-button" @click="toggleAddressModal">검색</button>
            </div>
          </div>
          <div class="form-group">
            <div class="label">
              <label for="" class="form-label">상세주소</label>
            </div>
            <div class="form-input">
              <input v-model="form['restAddr']" ref="restAddr" type="text">
            </div>
          </div>
          <div class="form-group">
            <div class="label">
              <label for="" class="form-label">사업자등록번호</label>
            </div>
            <div class="form-input">
              <input v-model="form['taxNo']" type="tel" readonly>
            </div>
          </div>
          <div class="form-group">
            <div class="label">
              <label for="" class="form-label">사업장 대표 전화번호</label>
            </div>
            <div class="form-input">
              <input v-model="form['phone']" type="tel">
            </div>
          </div>
          <div class="form-group">
            <div class="label">
              <label for="" class="form-label">사업장 대표 이메일</label>
            </div>
            <div class="form-input">
              <input v-model="form['email']" type="email">
            </div>
          </div>
          <div class="form-group">
            <div class="label">
              <label for="" class="form-label">공제증서 또는 보험증권</label>
            </div>
            <div class="form-input">
              <input v-model="form['expirationDate']" type="date" placeholder="만료예정일" readonly>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <CommonBottomButton
          id="btn-send"
          text="회원정보 변경"
          backgroundColor="#000000" height="60px" width="100%" color="#fff"
          :font-weight="700"
          :disabled="false"
          @handler-click-button="handleBtnSendClick"
        />
      </div>
    </div>
    <SearchAddressModal 
      :is-show="isAddressModal" 
      @set-address="setAddress"
      @close-modal="toggleAddressModal" />
    <CommonFullScreenFadeModal :is-show="isPreviewModalShow">
      <div class="preview-header">
        <button class="close-button" @click="togglePreviewModal"></button>
      </div>
      <div class="preview-container">
        <img id="previewImage" :src="previewFileSrc" aria-hidden>
      </div>
    </CommonFullScreenFadeModal>
    <LoadingModal v-if="isLoading" text="변경중입니다" />
  </NuxtLayout>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

import { firm } from '~/services/firm.js'
import { isEmpty } from '@priros/common/assets/js/utils.js'
import { base64 } from '@priros/common/assets/js/filePreview.js'

import CommonBottomButton from '@priros/common/components/button/CommonBottomButton.vue'
import SearchAddressModal from '~/components/modal/SearchAddressModal.vue'
import CommonFullScreenFadeModal from '~/components/modal/CommonFullScreenFadeModal.vue'
import LoadingModal from '@priros/common/components/modal/LoadingModal.vue'
definePageMeta({
  layout: false,
})

const form = ref({
  firmName: '',
  delegater: '',
  postNo: '',
  addr: '',
  restAddr: '',
  taxNo: '',
  phone: '',
  email: '',
  expirationDate: '',
  insuranceFileName: '',
})
const insuranceFileObj = ref(null)
const isLoading = ref(false)

onMounted(() => {
  firm.get()
    .then(({data}) => {
      form.value = data
    })
    .catch((e) => {
      alert('다시 시도해주세요')
      console.log(e)
    })
})

const isAddressModal = ref(false)
const toggleAddressModal = () => {
  isAddressModal.value = !isAddressModal.value
}
const restAddr = ref(null)
const setAddress = (value) => {
  form.value.addr = value.address
  form.value.postNo = value.postCode
  restAddr.value?.focus()
}

const isPreviewModalShow = ref(false)
const insuranceFileData = ref({
  insuranceFile: null,
  insuranceFileName: ''
})
const togglePreviewModal = () => {
  isPreviewModalShow.value = !isPreviewModalShow.value
  if(isPreviewModalShow.value) {
    if(insuranceFileObj.value === null) {
      firm.file()
        .then(({data}) => {
          insuranceFileData.value = data
        })
        .catch(e => {
          alert('파일을 불러올 수 없습니다.\n잠시후 다시 시도해주세요.')
          console.log(e)
        })
    } else {
      base64(insuranceFileObj.value, 'previewImage')
    }
  }
}
const previewFileExt = computed(() => 
  isEmpty(insuranceFileData.value.insuranceFileName) ?
    '' : insuranceFileData.value.insuranceFileName.split('.')[1]
)
const previewFileSrc = computed(() => {
  const type = ['png', 'jpg', 'jpeg'].includes(previewFileExt.value) ? 'image' : 'appication/pdf'
  return isEmpty(insuranceFileData.value.insuranceFile) ?
    '/img/cha/cha-empty-01.png' :
    `data:${type}/${previewFileExt.value};base64,${insuranceFileData.value.insuranceFile}`
})

const formValidation = computed(() => {
  const validateEnum = ['postNo', 'addr', 'restAddr', 'phone', 'email', 'expirationDate']
  for(const v of validateEnum) {
    if(isEmpty(form.value[v])) return false
  }
  return true
})

const handleBtnSendClick = () => {
  if(!formValidation.value) {
    if(isEmpty(form.value['postNo'])|| isEmpty(form.value['addr'])){
      alert('주소를 입력해주세요')
    } else if(isEmpty(form.value['restAddr'])) {
      alert('상세주소를 입력해주세요')
    } else if(isEmpty(form.value['phone'])) {
      alert('사업장 대표 전화번호를 입력해주세요')
    } else if(isEmpty(form.value['email'])) {
      alert('사업장 대표 이메일을 입력해주세요')
    } else if(isEmpty(form.value['expirationDate'])) {
      alert('공제증서 또는 보험증권 만료일을 입력해주세요')
    }
    return false
  }

  isLoading.value = true
  const formData = new FormData()
  formData.append('postNo', form.value.postNo)
  formData.append('addr', form.value.addr)
  formData.append('restAddr', form.value.restAddr)
  formData.append('phone', form.value.phone)
  formData.append('email', form.value.email)
  formData.append('expirationDate', form.value.expirationDate)

  firm.post(formData)
    .then(() => {
      alert('회원정보가 변경되었습니다.')
    })
    .catch(() => {
      alert('회원정보 변경에 실패하였습니다.\n잠시후 다시 시도해주세요.')
    })
    .finally(() => {
      isLoading.value = false
    })
}
</script>

<style scoped lang="scss">
@import '@priros/common/assets/scss/views/dialog';
.form-button {
  height: 48px;
  padding: 0 20px;
  border-radius: 5px;
  background-color: #404040;
  border: none;
  color: #ffffff;
  font-size: 16px;
  font-weight: $ft-medium;
  cursor: pointer;
}
// preview modal
.preview-header {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #ffffff;
  padding: 0 16px;
  position: sticky;
  top: 0;
  z-index: $zi-sticky;
  .close-button {
    display: block;
    width: 24px;
    height: 24px;
    background: url(/img/icon/close-black.svg) no-repeat center/16px;
    border: none;
  }
}
.preview-container {
  padding: 34px 16px;
  & > img {
    width: 100%;
    height: auto;
  }
}
</style>