
<template>
  <CommonFullScreenFadeModal :is-show="props.isShow">
    <div class="search-header">
    <button class="close-button" @click="handlerClickCloseModal"></button>
    </div>
    <div class="search-container">
      <input v-model="searchKeyword" type="text" @keyup.enter="handlerClickSearchAddress">
      <img src="/img/icon/search-gray.svg" aria-hidden class="my-case-search-icon" @click="handlerClickSearchIcon">
    </div>
    <div v-if="isError" class="search-error">
    <img class="search-error-image" src="/img/cha/cha-empty.png" aria-hidden>
      <p class="search-error-title">다시 검색해주세요.</p>
      <p class="search-error-message">{{ errorMessage }}</p>
    </div>
    <div v-if="isEmpty" class="search-error">
    <img class="search-error-image" src="/img/cha/cha-empty.png" aria-hidden>
      <p class="search-error-title">검색 결과가 없습니다.</p>
    </div>
    <div v-if="isSuccess" class="search-list">
      <div v-for="(address, index) in addressList" :key="index" class="search-item" @click="handlerClickAddressItem(address.roadAddr)">
        <div class="item-column">
          <span class="item-title">우편번호</span>
          <p class="item-content">{{ address.zipNo }}</p>
        </div>
        <div v-if="!!address.roadAddr" class="item-column">
          <span class="item-title">도로명 주소</span>
          <p class="item-content">{{ address.roadAddr }}</p>
        </div>
        <div v-if="!!address.jibunAddr" class="item-column">
          <span class="item-title">지번 주소</span>
          <div class="item-content">{{ address.jibunAddr }}</div>
        </div>
      </div>
      <div class="bottom-buttons">
        <div class="bottom-button" @click="handlerClickPrevButton">&lt;</div>
        <div class="bottom-button" @click="handlerClickNextButton">&gt;</div>
      </div>
    </div>
  </CommonFullScreenFadeModal>
</template>
<script setup>
import { ref } from 'vue'
import axios from '@priros/common/node_modules/axios'
import CommonFullScreenFadeModal from '~/components/modal/CommonFullScreenFadeModal.vue'

const props = defineProps({
  isShow: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits(['set-address', 'close-modal'])

const searchKeyword = ref('')
const currentPage = ref(1)
const totalCount = ref(0)
const isError = ref(false)
const isEmpty = ref(false)
const isSuccess = ref(false)
const errorMessage = ref('')
const addressList = ref([])

const requestSearchAddress = () => {
  isError.value = false
  isEmpty.value = false
  isSuccess.value = false
  errorMessage.value = ''
  const form = `confmKey=U01TX0FVVEgyMDIxMDIwMzE3NTUyODExMDc3Nzc=&currentPage=${currentPage.value}&countPerPage=10&keyword=${searchKeyword.value}&resultType=json`
  axios.get(`https://business.juso.go.kr/addrlink/addrLinkApi.do?${form}`)
    .then(({data}) => {
      console.log(data)
      if(!data.results.juso) {
        isError.value = true
        errorMessage.value = data.results.common.errorMessage
      } else if(data.results.juso.length === 0) {
        isEmpty.value = true
      } else {
        isSuccess.value = true
        totalCount.value = Number(data.results.common.totalCount)
        addressList.value = data.results.juso
      }
    })
}
const handlerClickSearchAddress = () => {
  currentPage.value = 1
  totalCount.value = 0
  requestSearchAddress()
}
const handlerClickSearchIcon = (e) => {
  e.preventDefault()
  e.stopPropagation()
  handlerClickSearchAddress()
}
const handlerClickPrevButton = () => {
  if(currentPage.value === 1) return false
  currentPage.value--
  requestSearchAddress()
}
const handlerClickNextButton = () => {
  if(Math.floor(totalCount.value / 10) < currentPage.value) return false
  currentPage.value++
  requestSearchAddress()
}
const handlerClickCloseModal = () => {
  emits('close-modal')
}
const handlerClickAddressItem = (address) => {
  emits('set-address', address)
  handlerClickCloseModal()
}
</script>
<style scoped lang="scss">
.search-header {
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
.search-container {
  width: 100%;
  padding: 8px 16px;
  background-color: #ffffff;
  position: sticky;
  top: 60px;
  z-index: $zi-sticky;
  & > input {
    width: 100%;
    height: 42px;
    background-color: #f2f2f2;
    border-radius: 16px;
    border: none;
    padding: 0 40px 0 16px;
    font-size: 16px;
  }
  & > img {
    width: 24px;
    position: absolute;
    top: 50%;
    right: 24px;
    transform: translateY(-50%);
  }
}
.search-list {
  padding: 16px 16px 32px;
}
.search-error {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .search-error-image {
    width: 100px;
    margin-bottom: 20px;
  }
  .search-error-title {
    font-size: 16px;
    font-weight: $ft-bold;
    text-align: center;
  }
  .search-error-message {
    font-size: 14px;
    font-weight: $ft-medium;
    text-align: center;
    margin-top: 12px;
  }
}
.bottom-buttons {
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 18px;
  margin-top: 16px;
  .bottom-button {
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 8px 8px 4px;
    border: 1px solid #000000;
    cursor: pointer;
  }
}
.search-item {
  padding: 16px;
  border-bottom: 1px solid #d9d9d9;
  .item-column {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    & + .item-column {
      margin-top: 6px;
    }
    .item-title {
      font-size: 14px;
      color: #d9d9d9;
      width: 70px;
    }
    .item-content {
      font-size: 14px;
      color: #000000;
      font-weight: $ft-medium;
      flex: 1;
    }
  }
}
</style>