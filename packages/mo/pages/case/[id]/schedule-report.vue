<template>
  <NuxtLayout name="dialog-header" headerTitle="일정등록">
    <div class="dialog-wrapper">
      <div class="container">
        <div class="inner-body">
          <div class="forms">
            <div class="form-group">
              <div class="label">
                <label for="" class="form-label">잔금일</label>
              </div>
              <div class="form-input">
                <input v-model="date" type="date" readonly>
              </div>
            </div>
            <div class="schedule-container">
              <p class="schedule-title">매수인에게 확인 후 체크해주세요</p>
              <p class="schedule-subtitle">
                매매계약의 중요사항이 현장에서 변경되면 대출금 지급을 중지하고 은행 또는 설정대리인에게 연락해야합니다.
              </p>
              <div class="form-group">
                <div class="label">
                  <label for="" class="form-label">1. 잔금시간은 몇 시 입니까?</label>
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
                  <label for="" class="form-label">2. 매매가격을 수정했나요?</label>
                </div>
                <div class="form-input flex-start">
                  <label class="form-label label--big">
                    <input v-model="salePriceModifiedFlag" type="radio" name="price" value="N">
                    <span>동일</span>
                  </label>
                  <label class="form-label label--big">
                    <input v-model="salePriceModifiedFlag" type="radio" name="price" value="Y">
                    <span>변동발생</span>
                  </label>
                </div>
              </div>
              <div class="form-group">
                <div class="label">
                  <label for="" class="form-label">3. 계약서 작성 후 주소전입변동이 있나요?</label>
                </div>
                <div class="form-input flex-start">
                  <label class="form-label label--big">
                    <input v-model="buyerAddressType" type="radio" name="address" value="E">
                    <span>동일</span>
                  </label>
                  <label class="form-label label--big">
                    <input v-model="buyerAddressType" type="radio" name="address" value="C">
                    <span>변동발생</span>
                  </label>
                </div>
              </div>
              <div class="form-group">
                <div class="label">
                  <label for="" class="form-label">4. 매수인별 취득지분을 알려주세요</label>
                </div>
                <div class="form-input flex-start">
                  <label class="form-label label--big">
                    <input v-model="acquisitionShareType" type="radio" name="share" value="S">
                    <span>단독명의</span>
                  </label>
                  <label class="form-label label--big">
                    <input v-model="acquisitionShareType" type="radio" name="share" value="M">
                    <span>공동명의</span>
                  </label>
                </div>
                <div class="form-input">
                  <textarea v-model="acquisitionShareDetail" class="schedule-area" placeholder="매수인별로 이름과 취득지분을 입력하세요 (균분일 경우 생략가능)"></textarea>
                </div>
              </div>
              <div class="form-group">
                <div class="label">
                  <label for="" class="form-label">5. 등기부상 매수인측이 채무자가 되어 말소할 수 없는 근저당권이 있나요? (중도금 지급목적대출 등)</label>
                </div>
                <div class="form-input flex-start">
                  <label class="form-label label--big">
                    <input v-model="mortgageRemovableFlag" type="radio" name="coll" value="N">
                    <span>동일</span>
                  </label>
                  <label class="form-label label--big">
                    <input v-model="mortgageRemovableFlag" type="radio" name="coll" value="Y">
                    <span>변동발생</span>
                  </label>
                </div>
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
import { useRoute, useRouter } from "vue-router";

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
const salePriceModifiedFlag = ref('')
const buyerAddressType = ref('')
const acquisitionShareType = ref('')
const acquisitionShareDetail = ref('')
const mortgageRemovableFlag = ref('')

const route = useRoute()
const router = useRouter()
const tradeCaseId = route.params.id

onMounted(() => {
  tradeCaseScheduleReport.get(tradeCaseId).then(({data}) => {
    if(!isEmpty.data) {
      date.value = data.issueDate.split('T')[0]
      hour.value = data.issueTime.slice(0, 2)
      minute.value = data.issueTime.slice(2, 4)
      salePriceModifiedFlag.value = data.salePriceModifiedFlag
      buyerAddressType.value = data.buyerAddressType
      acquisitionShareType.value = data.acquisitionShareType
      acquisitionShareDetail.value = data.acquisitionShareDetail
      mortgageRemovableFlag.value = data.mortgageRemovableFlag
    }
  })
  .catch(e => {
    alert(e.response.data.message.replace(/<br>/gi, '\n'))
    router.back()
  })
})

const formValidation = computed(() => {
  return (
    !isEmpty(date.value) &&
    !isEmpty(hour.value) &&
    !isEmpty(minute.value) && 
    !isEmpty(date.value) &&
    !isEmpty(salePriceModifiedFlag.value) &&
    !isEmpty(buyerAddressType.value) &&
    !isEmpty(acquisitionShareType.value) &&
    !isEmpty(mortgageRemovableFlag.value)
  )
})

const isSuccessModalShow = ref(false)
const toggleSuccessModal = () => {
  isSuccessModalShow.value = !isSuccessModalShow.value
}

const handleBtnSendClick = () => {
  if(!formValidation.value) {
    if(isEmpty(date.value)){
      alert('잔금일을 선택해주세요')
    } else if(isEmpty(hour.value)){
      alert('잔금 시간(시간)을 선택해주세요')
    } else if(isEmpty(minute.value)) {
      alert('잔금 시간(분)을 선택해주세요')
    } else if(isEmpty(date.value)) {
      alert('잔금일을 선택해주세요')
    } else if(isEmpty(salePriceModifiedFlag.value)) {
      alert('매매가격 수정 여부를 선택해주세요')
    } else if(isEmpty(buyerAddressType.value)) {
      alert('주소전입변동 여부를 선택해주세요')
    } else if(isEmpty(acquisitionShareType.value)) {
      alert('매수인별 취득지분을 선택해주세요')
    } else if(isEmpty(mortgageRemovableFlag.value)) {
      alert('근저당권 변동 여부를 선택해주세요')
    } 

    return false
  }
  
  tradeCaseScheduleReport.post(tradeCaseId, {
    issueDate: date.value,
    issueTime: `${hour.value}${minute.value}`,
    salePriceModifiedFlag: salePriceModifiedFlag.value,
    buyerAddressType: buyerAddressType.value,
    acquisitionShareType: acquisitionShareType.value,
    acquisitionShareDetail: acquisitionShareDetail.value,
    mortgageRemovableFlag: mortgageRemovableFlag.value,
  }).then(() => {
    toggleSuccessModal()
  }).catch(e => {
    alert(e.response.data.message)
    console.log(e)
  })
}

</script>

<style scoped lang="scss">
@import '@priros/common/assets/scss/views/dialog';
.schedule-container {
  padding: 14px 8px 54px;
  border-radius: 12px;
  border: 1px solid #dbdbdb;
  background-color: #f8f8f8;
  margin-top: 43px;
}
.schedule-title {
  font-weight: $ft-bold;
  color: #235bed;
  line-height: 22px;
}
.schedule-subtitle {
  margin: 4px 0 23px;
  font-size: 12px;
  color: #808080;
  line-height: 16px;
  word-break: keep-all;
}
</style>