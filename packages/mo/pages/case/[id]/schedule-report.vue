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
          <div v-if="!isCompleted && chargeData" class="inner-content">
            <table class="tbl">
              <colgroup>
                <col style="width: 60px">
                <col>
              </colgroup>
              <tbody>
              <tr>
                <th>상호</th>
                <td>{{ chargeData.firmName }}</td>
              </tr>
              <tr>
                <th>이름</th>
                <td>{{ chargeData.userName }}</td>
              </tr>
              <tr>
                <th>연락처</th>
                <td>{{ chargeData.phone }}</td>
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
                <select><option value="시간"></option></select>
                <select><option value="분"></option></select>
              </div>
            </div>
            <div class="form-group">
              <div class="label">
                <label for="" class="form-label">잔금일</label>
              </div>
              <div class="form-input">
                <input type="date" readonly>
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
              :disabled="btnSendDisable"
              @handler-click-button="handleBtnSendClick"

          />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import {ref, computed, onMounted} from "vue";
import {useRoute, useRouter} from "vue-router";

import DropDown from '@priros/common/components/form/DropDown'
import CommonBottomButton from '@priros/common/components/button/CommonBottomButton.vue'

definePageMeta({
  layout: false
});

const chargeData = ref({
    "userId": "id1",
    "firmCode": "FIRMCODE1",
    "firmName": "회사이름",
    "position": "대리",
    "userName": "김대리",
    "phone": "010-1234-1234",
    "tradeCaseId": 1
});

const isCompleted = ref(false);

const btnSendDisable = false;

const handleBtnSendClick = () => {
  console.log('send')
}

</script>

<style scoped lang="scss">
@import '@priros/common/assets/scss/views/dialog'
</style>