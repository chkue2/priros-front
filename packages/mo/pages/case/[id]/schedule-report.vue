<template>
  <NuxtLayout name="dialog" headerTitle="일정등록">
    <div class="dialog-wrapper">
      <div class="container">
        <div class="inner-header">
          <span class="badge" :class="captionClass">{{ captionText }}</span>
          <div class="txt-help" v-html="description"></div>
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
              <div>

              </div>
            </div>
            <div class="form-group">
              <div class="label">
                <label for="" class="form-label">잔금일</label>
              </div>
              <div>

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
              :text="btnSendText"
              backgroundColor="#000000" height="72px" width="100%" color="#fff"
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

import DropDown from "~/components/form/DropDown.vue";
import CommonBottomButton from '@priros/common/components/button/CommonBottomButton.vue'

definePageMeta({
  layout: false
});

const isCompleted = ref(false);

const captionClass = computed(() => chargeData.value ? "badge-primary-gradient" : "badge-secondary");
const captionText = computed(() => isCompleted.value ? '담당자보고 완료' : "담당자 보고전 확인");
const description = computed(() => {
  if (isCompleted.value) {
    return `
      잔금일 아침, 당일 채권할인율이
      <br>적용된 견적을 저장하고 공유하면 편리합니다!
    `;
  } else {
    return `
      등록된 담당자와 잔금현장에 방문할 담당자가 동일한지
      <br>다시 한번 확인하세요.
    `;
  }
});

const btnSendText = computed(() => isCompleted.value ? '닫기' : '일정보고');
const btnSendDisable = false;

</script>

<style scoped lang="scss">

</style>