<template>
  <div class="join-container">
    <p class="join-title">반갑습니다.<br>아래 정보를 입력해주세요.</p>
    <p class="join-subtitle">*는 필수 입력 항목입니다.</p>
    <div class="join-form">
      <p class="join-form-title">회원유형 *</p>
      <div class="join-form-input-container">
        <select v-model="form['firmType']" class="join-form-input">
          <option v-for="t in userTypeEnum" :key="t" :value="t">{{ t }}</option>
        </select>
      </div>
      <p class="join-form-title">직책 *</p>
      <div class="join-form-input-container">
        <input v-model="form['position']" type="text" class="join-form-input w-60" placeholder="직책을 입력해주세요">
      </div>
      <p class="join-form-title">대표자 *</p>
      <div class="join-form-input-container">
        <input v-model="form['name']" type="text" class="join-form-input w-60" placeholder="본인인증이 필요합니다" readonly>
        <button class="join-form-gray-button" @click="handlerClickVerification">본인확인</button>
      </div>
      <p class="join-form-title">휴대전화번호 *</p>
      <div class="join-form-input-container">
        <input v-model="form['phone']" type="tel" class="join-form-input" placeholder="본인인증 후 자동입력" readonly>
      </div>
      <p class="join-form-title">사업장 대표 전화번호 *</p>
      <div class="join-form-input-container">
        <input v-model="form['tel']" type="tel" class="join-form-input" placeholder="사업장 대표 전화번호를 입력해주세요" >
      </div>
      <p class="join-form-title">사업장 대표 이메일</p>
      <div class="join-form-input-container">
        <input v-model="form['email']" type="email" class="join-form-input" placeholder="사업장 대표 이메일을 입력해주세요" >
      </div>
      <p class="join-form-title">사업장 등록증 *</p>
      <div class="join-form-input-container">
        <button class="join-form-input-file" @click="handlerClickBusinessLicenseFile">{{ businessLicenseButtonText }}</button>
        <input type="file" ref="businessLicenseFile" @change="handlerChangeBusinessLicenseFile">
      </div>
      <p class="join-form-title">전문가 등록증 *</p>
      <div class="join-form-input-container">
        <button class="join-form-input-file" @click="handlerClickExpertLicenseFile">{{ expertLicenseButtonText }}</button>
        <input type="file" ref="expertLicenseFile" @change="handlerChangeExpertLicenseFile">
      </div>
      <div class="join-form-double-container">
        <div class="join-form-double-left">
          <p class="join-form-title">만료예정일 *</p>
          <div class="join-form-input-container">
            <input v-model="form['expiredDate']" type="date" class="join-form-input" style="font-size: 10px;">
          </div>
        </div>
        <div class="join-form-double-right">
          <p class="join-form-title">공제증서 또는 보험증권 *</p>
          <div class="join-form-input-container">
            <button class="join-form-input-file" @click="handlerClickCertFile">{{ certButtonText }}</button>
            <input type="file" class="join-form-input" ref="certFile" @change="handlerChangeCertFile">
          </div>
        </div>
      </div>
      <label class="join-form-label">
        <input v-model="isAgree" type="checkbox">
        <p>상기 정보를 제공하여 회원가입에 동의하며 가입승인 후 가입절차에 필요한 정보수집에 동의합니다.</p>
      </label>
    </div>
  </div>
  <div class="join-bottom-buttons sticky">
    <CommonBottomButton id="generalCancelButton" text="취소" width="35%" height="60px" backgroundColor="#d8d9db" @handler-click-button="handlerClickCancelButton" />
    <CommonBottomButton id="generalApplyButton" text="가입완료" width="65%" height="60px" @handler-click-button="handlerClickApplyButton" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import CommonBottomButton from '@priros/common/components/button/CommonBottomButton.vue'
import { join } from '~/services/join.js'

const userTypeEnum = ['법무사', '합동법무사', '법무사법인', '변호사', '합동변호사', '법무법인', '금융기관', '일반사용자', '공인중개사']

const router = useRouter()
const handlerClickCancelButton = () => {
  router.back()
}

const validateEnum = ['firmType', 'position', 'name', 'phone', 'tel', 'businessLicense', 'expertLicense', 'expiredDate', 'cert']
const form = ref({})
const isAgree = ref(false)

const formValidation = computed(() => {
  for(const e of validateEnum) {
    if(form.value[e] === undefined || form.value[e] === null || form.value[e] === '') return false
  }

  if(!isAgree.value) return false

  return true
})

const handlerClickVerification = () => {
  form.value['name'] = 'test'
  form.value['phone'] = '01012341234'
}

// 사업자 등록증
const businessLicenseFile = ref(null)
const handlerClickBusinessLicenseFile = () => {
  businessLicenseFile.value.click()
}
const handlerChangeBusinessLicenseFile = (e) => {
  form.value['businessLicense'] = e.target.files[0]
}
const businessLicenseButtonText = computed(() => 
  !form.value['businessLicense'] ? '등록증을 업로드해주세요' : form.value['businessLicense'].name
)

// 전문가 등록증
const expertLicenseFile = ref(null)
const handlerClickExpertLicenseFile = () => {
  expertLicenseFile.value.click()
}
const handlerChangeExpertLicenseFile = (e) => {
  form.value['expertLicense'] = e.target.files[0]
}
const expertLicenseButtonText = computed(() => 
  !form.value['expertLicense'] ? '등록증을 업로드해주세요' : form.value['expertLicense'].name
)

// 공제증서
const certFile = ref(null)
const handlerClickCertFile = () => {
  certFile.value.click()
}
const handlerChangeCertFile = (e) => {
  form.value['cert'] = e.target.files[0]
}
const certButtonText = computed(() => 
  !form.value['cert'] ? '파일을 업로드해주세요' : form.value['cert'].name
)

const handlerClickApplyButton = () => {
  if(!formValidation.value) {
    if(form.value['firmType'] === undefined || form.value['firmType'] === '') {
      alert('회원유형을 선택해주세요')
    } else if(form.value['position'] === undefined || form.value['position'] === ''){
      alert('직책을 입력해주세요')
    } else if(form.value['name'] === undefined || form.value['name'] === '' || form.value['phone'] === undefined || form.value['phone'] === ''){
      alert('본인확인을 해주세요')
    } else if(form.value['tel'] === undefined || form.value['tel'] === ''){
      alert('사업장 대표 전화번호를 입력해주세요')
    } else if(form.value['businessLicense'] === undefined){
      alert('사업장 등록증을 업로드해주세요')
    } else if(form.value['expertLicense'] === undefined){
      alert('전문가 등록증을 업로드해주세요')
    } else if(form.value['expiredDate'] === undefined || form.value['expiredDate'] === ''){
      alert('만료예정일을 입력해주세요')
    } else if(form.value['cert'] === undefined){
      alert('공제증서 또는 보험증권을 업로드해주세요')
    } else if(!isAgree.value) {
      alert('정보 제공에 동의해주세요')
    }

    return false
  }

  const formData = new FormData()
  formData.append('firmType', form.value['firmType'])
  formData.append('position', form.value['position'])
  formData.append('charge', form.value['name'])
  // formData.append('responseNumber', form.value['responseNumber']) // 본인확인 도입 후에 설정
  formData.append('responseNumber', 'test')
  formData.append('mobile', form.value['phone'])
  formData.append('phone', form.value['tel'])
  formData.append('email', form.value['email'] || '')
  formData.append('expirationDate', form.value['expiredDate'])
  formData.append('taxFile', form.value['businessLicense'])
  formData.append('insureFile', form.value['expertLicense'])
  formData.append('insureFile', form.value['cert'])

  join.expert(formData).then(response => {
    console.log(response)
  })
  .catch(e => {
    console.log(e)
  })


  // router.push('/user/join/expert-success')
}
</script>

<style lang="scss" scoped>
@import '@priros/common/assets/scss/join/common.scss';
.join-form {
  margin-top: 40px;
}
.join-form-double-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 4px;
  .join-form-double-left {
    grid-column: span 2;
  }
  .join-form-double-right {
    grid-column: span 3;
  }
}
.join-form-label {
  margin-bottom: 24px;
}
</style>