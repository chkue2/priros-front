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
              <input type="text">
            </div>
          </div>
          <div class="form-group">
            <div class="label">
              <label for="" class="form-label">대표자</label>
            </div>
            <div class="form-input">
              <input type="text">
            </div>
          </div>
          <div class="form-group">
            <div class="label">
              <label for="" class="form-label">주소</label>
            </div>
            <div class="form-input">
              <input v-model="form.address" type="text" readonly>
              <button class="form-button" @click="toggleAddressModal">검색</button>
            </div>
          </div>
          <div class="form-group">
            <div class="label">
              <label for="" class="form-label">상세주소</label>
            </div>
            <div class="form-input">
              <input type="text">
            </div>
          </div>
          <div class="form-group">
            <div class="label">
              <label for="" class="form-label">사업자등록번호</label>
            </div>
            <div class="form-input">
              <input type="tel">
            </div>
          </div>
          <div class="form-group">
            <div class="label">
              <label for="" class="form-label">사업장 대표 전화번호</label>
            </div>
            <div class="form-input">
              <input type="tel">
            </div>
          </div>
          <div class="form-group">
            <div class="label">
              <label for="" class="form-label">사업장 대표 이메일</label>
            </div>
            <div class="form-input">
              <input type="email">
            </div>
          </div>
          <div class="form-group">
            <div class="label">
              <label for="" class="form-label">공제증서 또는 보험증권</label>
            </div>
            <div class="form-input">
              <input type="date" placeholder="만료예정일">
            </div>
            <div class="form-input">
              <input type="file">
              <p class="input-file">파일을 업로드해주세요 <img src="/img/icon/file-gray.png" alt=""></p>
              <button class="form-button">파일보기</button>
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
  </NuxtLayout>
</template>

<script setup>
import { ref } from 'vue'
import CommonBottomButton from '@priros/common/components/button/CommonBottomButton.vue'
import SearchAddressModal from '~/components/modal/SearchAddressModal.vue';
definePageMeta({
  layout: false,
})

const isAddressModal = ref(false)
const toggleAddressModal = () => {
  isAddressModal.value = !isAddressModal.value
}

const form = ref({
  address: ''
})

const setAddress = (value) => {
  form.value.address = value
}

const handleBtnSendClick = () => {
  console.log('send')
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
</style>