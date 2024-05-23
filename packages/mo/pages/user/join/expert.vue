<template>
  <div class="join-container">
    <p class="join-title">반갑습니다.<br>아래 정보를 입력해주세요.</p>
    <p class="join-subtitle">*는 필수 입력 항목입니다.</p>
    <form action="niceForm" id="niceForm">
      <input type="hidden" id="m" name="m" value="checkplusService">
      <input type="hidden" id="token_version_id" name="token_version_id">
      <input type="hidden" id="enc_data" name="enc_data">
      <input type="hidden" id="integrity_value" name="integrity_value">
    </form>
    <div class="join-form">
      <div class="profile-image">
        <img id="profileImagePreview" src="/img/join/profile-empty.png">
        <div class="profile-image-buttons">
          <input ref="userProfileImage" type="file" @change="handlerChangeProfileImage">
          <button @click="handlerClickProfileImageUpload">
            <img src="/img/icon/upload-gray.svg">
            프로필사진 업로드
          </button>
        </div>
        <p class="profile-image-warning">
          증명사진 또는 여권 사진으로<br>
          <b>네모</b> 안에 얼굴 전체가 나오도록 프로필 첨부 바랍니다.
        </p>
      </div>
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
      <p class="join-form-title">아이디 *</p>
      <div class="join-form-input-container">
        <input v-model="form['id']" type="text" class="join-form-input w-60" placeholder="아이디를 입력해주세요" @change="handlerChangeId">
        <button class="join-form-gray-button" @click="handlerClickCheckIdButton">중복확인</button>
      </div>
      <p class="join-form-title">비밀번호 *</p>
      <div class="join-form-input-container">
        <input v-model="form['password']" type="password" class="join-form-input" placeholder="영문/숫자/특수문자 혼합 8자 이상 입력하세요">
      </div>
      <p class="join-form-title">비밀번호 확인*</p>
      <div class="join-form-input-container">
        <input v-model="form['passwordConfirm']" type="password" class="join-form-input" placeholder="비밀번호를 한 번 더 입력해주세요">
      </div>
      <p class="join-form-title">대표자 *</p>
      <div class="join-form-input-container">
        <input v-model="form['name']" id="name" type="text" class="join-form-input w-60" placeholder="본인인증이 필요합니다" readonly @input="handlerChangeName">
        <button class="join-form-gray-button" @click="sendNiceForm">본인확인</button>
      </div>
      <p class="join-form-title">휴대전화번호 *</p>
      <div class="join-form-input-container">
        <input v-model="form['phone']" id="phone" type="tel" class="join-form-input" placeholder="본인인증 후 자동입력" readonly @input="handlerChangePhone"> 
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
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import CommonBottomButton from '@priros/common/components/button/CommonBottomButton.vue'

import { base64 } from '@priros/common/assets/js/filePreview.js'
import { join } from '~/services/join.js'

import { isEmpty } from '@priros/common/assets/js/utils.js'

const userTypeEnum = ['법무사', '합동법무사', '법무사법인', '변호사', '합동변호사', '법무법인', '금융기관', '일반사용자', '공인중개사']
const actionUrl = ref('')

const userProfileImage = ref(null)

onMounted(() => {
  join.getNice(`${window.location.origin}/user/join/nice-result`)
    .then(({data}) => {
      document.getElementById('token_version_id').value = data.tokenVersionId
      document.getElementById('enc_data').value = data.encData
      document.getElementById('integrity_value').value = data.integrityValue
      actionUrl.value = data.actionUrl

      const receiveData = async (e) => {
        if(e.data.name) {
          form.value.name = e.data.name
          form.value.phone = e.data.phone
          form.value.responseNumber = e.data.responseNo
        }
      }

      window.addEventListener('message', receiveData, false)
    })
    .catch(e => {
      console.log(e)
      alert(e.response.data.message)
    })
})


const router = useRouter()
const handlerClickCancelButton = () => {
  router.back()
}

const validateEnum = ['userProfileImage', 'firmType', 'id', 'password', 'position', 'name', 'phone', 'tel', 'businessLicense', 'expertLicense', 'expiredDate', 'cert']
const form = ref({})
const isAgree = ref(false)

const checkId = ref(false)

const formValidation = computed(() => {
  for(const e of validateEnum) {
    if(form.value[e] === undefined || form.value[e] === null || form.value[e] === '') return false
  }

  if(!checkId.value) return false

  if(form.value['password'] !== form.value['passwordConfirm']) return false

  if(!isAgree.value) return false

  return true
})

const handlerClickProfileImageUpload = () => {
  userProfileImage.value.click()
}
const handlerChangeProfileImage = (e) => {
  if(e.target.files.length === 0) return false
  const file = e.target.files[0]
  for(let file of e.target.files) {
    if(file.size > 10 * 1024 * 1024) {
      alert('10MB 이상의 파일은 첨부할 수 없습니다.');
      return false;
    }
  }
  form.value['userProfileImage'] = file
  base64(file, 'profileImagePreview')
}

const handlerChangeId = () => {
  checkId.value = false
}

const handlerClickCheckIdButton = () => {
  if(!form.value['id'] || form.value['id'] === '') {
    alert('아이디를 입력해주세요')
    return false
  }

  join.checkId(form.value['id'])
    .then(({data}) => {
      alert('사용가능한 아이디입니다.')
      checkId.value = true
    })
    .catch(e => {
      alert(e.response.data.message)
      checkId.value = false
    })
}

// 사업자 등록증
const businessLicenseFile = ref(null)
const handlerClickBusinessLicenseFile = () => {
  businessLicenseFile.value.click()
}
const handlerChangeBusinessLicenseFile = (e) => {
  if(e.target.files.length === 0) return false
  for(let file of e.target.files) {
    if(file.size > 10 * 1024 * 1024) {
      alert('10MB 이상의 파일은 첨부할 수 없습니다.');
      return false;
    }
  }
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
  if(e.target.files.length === 0) return false
  for(let file of e.target.files) {
    if(file.size > 10 * 1024 * 1024) {
      alert('10MB 이상의 파일은 첨부할 수 없습니다.');
      return false;
    }
  }
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
  if(e.target.files.length === 0) return false
  for(let file of e.target.files) {
    if(file.size > 10 * 1024 * 1024) {
      alert('10MB 이상의 파일은 첨부할 수 없습니다.');
      return false;
    }
  }
  form.value['cert'] = e.target.files[0]
}
const certButtonText = computed(() => 
  !form.value['cert'] ? '파일을 업로드해주세요' : form.value['cert'].name
)

const handlerClickApplyButton = () => {
  if(!formValidation.value) {
    if(form.value['userProfileImage'] === undefined){
      alert('프로필사진을 업로드해주세요')
    } else if(form.value['firmType'] === undefined || form.value['firmType'] === '') {
      alert('회원유형을 선택해주세요')
    } else if(form.value['position'] === undefined || form.value['position'] === ''){
      alert('직책을 입력해주세요')
    } else if(form.value['id'] === undefined || form.value['id'] === ''){
      alert('아이디를 입력해주세요')
    } else if(!checkId.value){
      alert('아이디 중복확인을 해주세요')
    } else if(form.value['password'] === undefined || form.value['password'] === ''){
      alert('비밀번호를 입력해주세요')
    } else if(form.value['password'] !== form.value['passwordConfirm']){
      alert('비밀번호와 비밀번호 확인이 다릅니다')
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
  formData.append('profile', form.value['userProfileImage'])
  formData.append('firmKind', form.value['firmType'])
  formData.append('position', form.value['position'])
  formData.append('userId', form.value['id'])
  formData.append('password', form.value['password'])
  formData.append('passwordConfirm', form.value['position'])
  formData.append('charge', form.value['name'])
  formData.append('responseNumber', form.value['responseNumber']) // 본인확인 도입 후에 설정
  formData.append('mobile', form.value['phone'])
  formData.append('phone', form.value['tel'])
  formData.append('email', form.value['email'] || '')
  formData.append('expirationDate', form.value['expiredDate'])
  formData.append('taxFile', form.value['businessLicense'])
  formData.append('licenseFile', form.value['expertLicense'])
  formData.append('insureFile', form.value['cert'])
  formData.append('joinAgree', 'Y')
  formData.append('validationPassYn', true)

  join.expert(formData).then(response => {
    router.push('/user/join/expert-success')
  })
  .catch(e => {
    console.log(e)
  })
}

// 본인 인증
const sendNiceForm = () => {
  const form = document.getElementById('niceForm')
  
  form.action = actionUrl.value
  form.target = 'popupChk'
  form.submit()
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
.profile-image {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > img {
    width: 140px;
    height: 165px;
  }
  input[type=file] {
    display: none;
  }
  .profile-image-buttons {
    margin: 28px 0 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 100%;
    & > button {
      flex: 1;
      height: 48px;
      border-radius: 6px;
      border: 1px solid #bcbcbc;
      background-color: #ffffff;
      font-size: 15px;
      color: #808080;
      cursor: pointer;
    }
  }
  .profile-image-warning {
    font-size: 12px;
    text-align: center;
    font-weight: $ft-medium;
    color: #959595;
    line-height: 17px;
    margin-bottom: 38px;
    b {
      font-weight: $ft-bold;
      color: #7ef422;
    }
  }
}
</style>