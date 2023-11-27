<template>
  <NuxtLayout name="dialog-header" headerTitle="일정등록">
    <div class="dialog-wrapper">
      <div class="container">
        <div class="inner-header">
          <span class="badge badge-primary-gradient">일정등록 전 확인</span>
          <div class="txt-help">
            등록된 담당자와 잔금현장에 방문할 담당자가 동일한지
            <br>다시 한번 확인하세요.
          </div>
        </div>
        <div class="inner-body">
          <div class="inner-content">
            <table class="tbl">
              <colgroup>
                <col style="width: 60px">
                <col>
              </colgroup>
              <tbody>
              <tr>
                <th>상호</th>
                <td>{{ firmName }}</td>
              </tr>
              <tr>
                <th>이름</th>
                <td>{{ userName }} (ID: {{ userId }})</td>
              </tr>
              <tr>
                <th>연락처</th>
                <td>{{ userPhone }}</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="forms">
            <div class="form-group">
              <div class="label">
                <label for="" class="form-label">잔금시간</label>
              </div>
              <div class="form-input">
                <select v-model="hour">
                  <option value="">시간</option>
                  <option v-for="i in 24" :value="zeroStr(i, 2)" :key="`h-${i}`">{{ zeroStr(i, 2) }}시</option>
                </select>
                <select v-model="minute">
                  <option value="">분</option>
                  <option v-for="m in ['00', '10', '20', '30', '40', '50']" :key="`m-${m}`" :value="m">{{ m }}분</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <div class="label">
                <label for="" class="form-label">잔금일</label>
              </div>
              <div class="form-input">
                <input v-model="date" type="date">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="info text-center">
          안내전화 누락 민원이 자주발생하고 있습니다.
          <br>반드시 준비사항을 안내하고, 업무보고를 수행하세요.
        </div>
        <div>
          <CommonBottomButton
              id="btn-send"
              text="일정보고"
              backgroundColor="#000000" height="60px" width="100%" color="#fff"
              :font-weight="700"
              @handler-click-button="handleBtnSendClick"

          />
        </div>
      </div>
    </div>
    <CommonAlertModal
      v-if="isSuccessModalShow"
      text="일정보고가 완료되었습니다."
      @handler-click-button="toggleSuccessModal"
    />
  </NuxtLayout>
</template>

<script setup>
import {ref, computed, onMounted} from "vue";
import { useRoute } from "vue-router";

import CommonBottomButton from '@priros/common/components/button/CommonBottomButton.vue'
import CommonAlertModal from "@priros/common/components/modal/CommonAlertModal.vue"
import { isEmpty, zeroStr, rexFormatPhone } from '@priros/common/assets/js/utils.js'
import { tradeCaseScheduleReport } from '~/services/tradeCaseScheduleReport.js'


definePageMeta({
  layout: false
});

const hour = ref('')
const minute = ref('')
const date = ref('')

const route = useRoute()
const tradeCaseId = route.params.id

const firmName = ref('')
const userId = ref('')
const userName = ref('')
const userPhone = ref('')
onMounted(() => {
  tradeCaseScheduleReport.get(tradeCaseId).then(({data}) => {
    if(!isEmpty.data) {
      date.value = data.issueDate.split(' ')[0]
      hour.value = data.issueTime.slice(0, 2)
      minute.value = data.issueTime.slice(2, 4)
      firmName.value = data.firmName
      userId.value = data.userId
      userName.value = data.userName
      userPhone.value = rexFormatPhone(data.userPhone)
    }
  })
})

const formValidation = computed(() => {
  return (
    !isEmpty(hour.value) &&
    !isEmpty(minute.value) && 
    !isEmpty(date.value)
  )
})

const isSuccessModalShow = ref(false)
const toggleSuccessModal = () => {
  isSuccessModalShow.value = !isSuccessModalShow.value
}

const handleBtnSendClick = () => {
  if(!formValidation.value) {
    if(isEmpty(hour.value)){
      alert('잔금 시간(시간)을 선택해주세요')
    } else if(isEmpty(minute.value)) {
      alert('잔금 시간(분)을 선택해주세요')
    } else if(isEmpty(date.value)) {
      alert('잔금일을 선택해주세요')
    }

    return false
  }
  
  tradeCaseScheduleReport.post(tradeCaseId, {
    issueDate: date.value,
    issueTime: `${hour.value}${minute.value}`
  }).then(() => {
    toggleSuccessModal()
  }).catch(e => {
    alert('일정보고 실패')
    console.log(e)
  })
}

</script>

<style scoped lang="scss">
@import '@priros/common/assets/scss/views/dialog'
</style>