<template>
  <NuxtLayout name="dialog-header" headerTitle="등기필정보 조회">
    <div class="dialog-wrapper">
      <p class="top-text">
        부동산 고유번호와 등기필정보 일련번호의 일치 여부 및 사용 가능한 비밀번호를 조회할 수 있습니다.
      </p>
      <div class="wrapper-inner">
        <p class="success-text">인증완료 되었습니다</p>
        <div class="forms">
          <div class="form-group">
            <div class="label">
              <label for="" class="form-label">부동산 고유번호</label>
            </div>
            <div class="form-input">
              <input v-model="pin" type="text" placeholder="고유번호">
            </div>
          </div>
          <div class="form-group">
            <div class="label">
              <label for="" class="form-label">등기필정보 일련번호</label>
            </div>
            <div class="form-input">
              <input v-model="serialNo" type="text" placeholder="일련번호">
            </div>
          </div>
        </div>
      </div>
      <div v-if="bitList.length > 0" class="bit-container">
        <p class="bit-title">사용여부</p>
        <div class="bit-flex">
          <div v-for="(col, index) in bitList" :key="index" class="bit-column">
            <div v-for="(row, index2) in col" :key="index2" class="bit-row">
              <span>{{ row.index }}</span>
              <img v-if="row.value === '1'" src="/img/icon/check-broken.svg" alt="확인">
              <img v-if="row.value === '0'" src="/img/icon/close-red.svg" alt="취소">
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <p class="info">본 서비스는 인터넷등기소 조회결과를 단순제공하고 있으며,<br>문서의 진위여부를 보장하지는 않습니다.</p>
        <div>
          <CommonBottomButton
              id="btn-send"
              text="조회하기"
              backgroundColor="#000000" height="60px" width="100%" color="#fff"
              :font-weight="700"
              :disabled="false"
              @handler-click-button="handleBtnSendClick"
          />
        </div>
      </div>
    </div>
    <LoadingModal v-if="isLoading" text="조회중입니다.<br>잠시만 기다려주세요." />
  </NuxtLayout>
</template>
<script setup>
import { ref, computed } from 'vue'
import CommonBottomButton from '@priros/common/components/button/CommonBottomButton.vue'
import LoadingModal from '@priros/common/components/modal/LoadingModal.vue'

import { enquiry } from '~/services/enquiry.js'

definePageMeta({
  layout: false
});

// local test data
// const pin = ref('12012018015303')
// const serialNo = ref('8GHB4FRV39NB')
const pin = ref('')
const serialNo = ref('')

const isSuccess = computed(() => 
  pin.value !== '' &&
  serialNo.value !== ''
)

const isLoading = ref(false)

const bitList = ref([])
const handleBtnSendClick = () => {
  if(!isSuccess.value) {
    alert('부동산 고유번호와 등기필정보 일련번호를 모두 입력해주세요.')
    return false
  }

  isLoading.value = true
  enquiry.get({pin: pin.value, serialNo: serialNo.value}).then(({data}) => {
    let arr = []
    for(let i=0; i < 5; i++ ) {
      arr = [...arr, data.bitList.slice(10 * i, 10 * i + 10)]
    }
    arr = arr.reduce((prev, curr, index) => {
      curr = curr.map((c, index2) => {
        return {
          value: c,
          index: (index * 10) + (index2 + 1)
        }
      })
      prev.push(curr)
      return prev
    }, [])
    bitList.value = arr
  })
  .catch((e) => {
    console.log(e)
  })
  .finally(() => {
    isLoading.value = false
  })
}
</script>
<style scoped lang="scss">
@import '@priros/common/assets/scss/views/dialog';
.top-text {
  font-size: 14px;
  font-weight: $ft-medium;
  text-align: center;
  padding: 36px 30px 0;
}
.success-text {
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #e5e5e5;
  background-color: #f2f2f2;
  margin: 23px 0 35px;
  font-size: 16px;
  font-weight: $ft-semibold;
  color: #7b7b7b;
  visibility: hidden;
  &.active {
    visibility: visible;
  }
}
.bit-container{
  padding: 33px 16px;
  .bit-title {
    margin-bottom: 6px;
    font-weight: $ft-semibold;
    color: #181818;
  }
  .bit-flex {
    display: flex;
    border: 1px solid #bebebe;
  }
  .bit-column {
    flex: 1;
    display: flex;
    flex-direction: column;
    & + .bit-column{
      border-left: 1px solid #bebebe;
    }
  }
  .bit-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    background-color: #f9f9f9;
    & + .bit-row {
      border-top: 1px solid #bebebe;
    }
    & > span {
      font-weight: $ft-medium;
      margin-top: 2px;
    }
  }
}
</style>