<template>
  <div class="terms-wrapper">
    <p class="terms-title">이용약관</p>
    <div class="terms-form">
      <div class="form-title">
        <p class="form-title-text">회원가입약관</p>
        <div class="form-title-checkbox">
          <label><input type="checkbox" v-model="conditionAgree"><span>동의</span></label>
        </div>
      </div>
      <textarea class="form-textarea" readonly>제1장 총칙
제 1 조 (목적)
본 약관은 ㈜로앤텍(이하 “회사”라 함)이 운영하는 인터넷 사이트 및 모바일 어플리케이션(이하 “프리로스”라 함)에서 제공하는 제반 서비스의 이용과 관련하여 회사와 이용자 및 이용자 간의 권리, 의무 및</textarea>
      <div class="form-title">
        <p class="form-title-text">개인정보 처리방침</p>
        <div class="form-title-checkbox">
          <label><input type="checkbox" v-model="policyAgree"><span>동의</span></label>
        </div>
      </div>
      <textarea class="form-textarea" readonly>주식회사 로앤택은(이하 ‘회사’) 법률서비스 전문 플랫폼 ‘프리로스’와 관련하여, 개인정보 보호법 제30조에 따라 정보주체(고객)의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리지침을 수립하고 서비스 사이트(www.priros.com)를 통해 상시 공개합니다.주식회사 로앤택은(이하 ‘회사’) 법률서비스 전문 플랫폼 ‘프리로스’와 관련하여, 개인정보 보호법 제30조에 따라 정보주체(고객)의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리지침을 수립하고 서비스 사이트(www.priros.com)를 통해 상시 공개합니다.</textarea>
      <div class="form-title-checkbox all-agree">
        <label @click="handlerClickAllAgree"><input type="checkbox" v-model="allAgree"><span>이용약관 전체동의</span></label>
      </div>
    </div>  
  </div>
  <button class="terms-button" @click="handlerClickNextButton">다음</button>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const conditionAgree = ref(false)
const policyAgree = ref(false)
const allAgree = ref(false)

watch([conditionAgree, policyAgree], () => {
  allAgree.value = conditionAgree.value && policyAgree.value
})

const handlerClickAllAgree = (e) => {
  e.preventDefault()
  e.stopPropagation()

  conditionAgree.value = !allAgree.value
  policyAgree.value = !allAgree.value
}

const router = useRouter()
const handlerClickNextButton = () => {
  if(!conditionAgree.value || !policyAgree.value) {
    alert('약관에 모두 동의해주세요.')
    return false
  }
  router.push('/user/join/general')
}
</script>

<style scoped lang="scss">
.terms-wrapper {
  padding: 44px 16px;
  .terms-title {
    font-size: 22px;
    font-weight: $ft-bold;
    line-height: 30px;
  }
  .terms-form {
    margin-top: 27px;
  }
  .form-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .form-title-text {
    font-size: 14px;
    font-weight: $ft-medium;
  }
  .form-title-checkbox {
    & > label {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 8px;
      & > input {
        width: 16px;
        height: 16px;
      }
      & > span {
        font-size: 14px;
        margin-top: 2px;
      }
    }
    &.all-agree {
      margin-top: 40px;
      & > label {
        justify-content: center;
      }
    }
  }
  .form-textarea {
    width: 100%;
    height: 160px;
    padding: 16px;
    border-radius: 19px;
    background-color: #f2f2f2;
    overflow-x: hidden;
    overflow-y: auto;
    margin-top: 6px;
    resize: none;
    border: none;
    & + .form-title {
      margin-top: 38px;
    }
  }
}
.terms-button {
  width: 100%;
  height: 60px;
  margin-top: 48px;
  background-color: #000000;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  border: none;
  position: sticky;
  bottom: 0;
}
</style>