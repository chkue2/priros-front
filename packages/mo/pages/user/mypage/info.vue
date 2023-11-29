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
              <input v-model="form['expirationDate']" type="date" placeholder="만료예정일">
            </div>
            <div class="form-input">
              <input ref="insuranceFile" type="file" @change="handlerChangeInsuranceFile">
              <p class="input-file"
                @click="handlerClickInsuranceFile">{{insuranceFileName}} <img src="/img/icon/file-gray.png" aria-hidden></p>
              <button class="form-button" @click="togglePreviewModal">파일보기</button>
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
        <img src="/img/case/contract.png" aria-hidden>
      </div>
    </CommonFullScreenFadeModal>
    <LoadingModal v-if="isLoading" text="변경중입니다" />
  </NuxtLayout>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'

import { firm } from '~/services/firm.js'

import CommonBottomButton from '@priros/common/components/button/CommonBottomButton.vue'
import SearchAddressModal from '~/components/modal/SearchAddressModal.vue'
import CommonFullScreenFadeModal from '~/components/modal/CommonFullScreenFadeModal.vue'
import LoadingModal from '@priros/common/components/modal/LoadingModal.vue'
definePageMeta({
  layout: false,
})

const router = useRouter()
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
      console.log(data)
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
  console.log(form.value)
  restAddr.value?.focus()
}

const insuranceFileName = computed(() => {
  return form.value.insuranceFileName || '파일을 업로드해주세요'
})

const insuranceFile = ref(null)
const handlerClickInsuranceFile = () => {
  insuranceFile.value.click()
}
const handlerChangeInsuranceFile = (e) => {
  insuranceFileObj.value = e.target.files[0]
  form.value.insuranceFileName = insuranceFileObj.value.name
}

const isPreviewModalShow = ref(false)
const togglePreviewModal = () => {
  isPreviewModalShow.value = !isPreviewModalShow.value
}

const handleBtnSendClick = () => {
  isLoading.value = true
  const formData = new FormData()
  formData.append('postNo', form.value.postNo)
  formData.append('addr', form.value.addr)
  formData.append('restAddr', form.value.restAddr)
  formData.append('phone', form.value.phone)
  formData.append('email', form.value.email)
  formData.append('expirationDate', form.value.expirationDate)
  if(insuranceFileObj.value !== null) {
    formData.append('insuranceFile', insuranceFileObj.value)
  }

  firm.post(formData)
    .then(() => {
      alert('회원정보가 변경되었습니다.')
    })
    .catch(() => {
      alert('회원정보 변경에 실패했습니다.\n잠시후 다시 시도해주세요.')
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