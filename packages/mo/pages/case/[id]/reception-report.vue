<template>
  <NuxtLayout name="dialog-header" headerTitle="접수보고">
    <div class="dialog-wrapper">
      <div class="container">
        <div class="inner-body">
          <div class="forms">
            <div class="form-group">
              <div class="label">
                <label for="" class="form-label">접수일</label>
              </div>
              <div class="form-input">
                <input v-model="receiveDate" type="date" readonly>
              </div>
            </div>
            <div class="form-group">
              <div class="label">
                <label for="" class="form-label">접수번호</label>
                <span class="form-warning">해당 명의인의 접수번호를 입력해주세요</span>
              </div>
              <div class="form-input">
                <input v-model="receiveBuyer" type="text" readonly>
                <input v-model="receiveNo" type="text" placeholder="접수번호">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div>
          <CommonBottomButton
              id="btn-send"
              text="접수보고"
              backgroundColor="#000000" height="60px" width="100%" color="#fff"
              :font-weight="700"
              @handler-click-button="handleBtnSendClick"
          />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import {ref, onMounted} from "vue";
import { useRoute, useRouter } from "vue-router";

import { tradeCaseReceptionReport } from '~/services/tradeCaseReceptionReport.js'

import CommonBottomButton from '@priros/common/components/button/CommonBottomButton.vue'

definePageMeta({
  layout: false
});

const tradeCaseId = useRoute().params.id

const receiveNo = ref('')
const receiveDate = ref('')
const receiveBuyer = ref('')

onMounted(() => {
  tradeCaseReceptionReport.get(tradeCaseId)
    .then(({data}) => {
      if(data.receiveDateTime !== null) {
        receiveDate.value = data.receiveDateTime.split('T')[0]
      }
      receiveBuyer.value = data.buyer
    })
    .catch(e => {
      alert(e.response.data.message)
      useRouter().back()
    })
})

const handleBtnSendClick = () => {
  if(receiveNo.value === '') {
    alert('접수번호를 입력해주세요.')
    return false
  }
  
  tradeCaseReceptionReport.post(tradeCaseId, { receiveDate: receiveDate.value, receiveNo: receiveNo.value })
    .then(() => {
      alert('접수보고가 완료되었습니다.')
    })
    .catch(e => {
      alert(e.response.data.message)
    })
}
</script>

<style scoped lang="scss">
@import '@priros/common/assets/scss/views/dialog'
</style>