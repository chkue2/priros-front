<template>
  <NuxtLayout name="dialog-header" headerTitle="담당자 보고">
    <div class="dialog-wrapper">
      <div class="container">
        <div class="inner-header">
          <span class="badge badge-primary-gradient">담당자 보고전 확인</span>
          <div class="txt-help" v-html="description"></div>
        </div>
        <div class="inner-body">
          <div class="form-group">
            <div class="label">
              <label class="form-label">담당자 정보</label>
            </div>

            <DropDown
                placeholder="담당자 선택하기"
                :options="chargeOptions"
                :selected-text="chargeSelectText"
                @click-option="handleChargeOption"
            />
          </div>
          <div v-if="chargeData" class="inner-content">
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
              text="담당자 보고"
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

//
import DropDown from "~/components/form/DropDown";
import CommonBottomButton from '@priros/common/components/button/CommonBottomButton.vue'
import {tradeCaseChargeService} from "~/services/tradeCaseChargeService.js";


definePageMeta({
  layout: false
});


const router = useRouter();
const chargeOptions = ref([]);
const chargeData = ref(null);
const isChargeCompleted = ref(false);

const tradeCaseId = useRoute().params.id;

const description = computed(() => {
  if (isChargeCompleted.value) {
    return `
    담당자의 프로필이 고객에게 알림톡으로 전송됩니다.
    <br>담당자보고를 수행하시겠습니까?
    `;
  } else {
    return `
      담당자의 프로필이 고객에게 알림톡으로 전송됩니다.
      <br>연락처 및 담당자의 정보를 확인해주세요.
    `;
  }
});

const chargeSelectText = computed(() => chargeData.value?.userName || "");

const btnSendDisable = computed(() => !chargeData.value);

const fetchChargeState = async (tradeCaseId) => {
  try {
    const {data} = await tradeCaseChargeService.state(tradeCaseId);
    chargeData.value = data || null;
    isChargeCompleted.value = !!data;

    if (!data){
      fetchChargeList(tradeCaseId);
    }

  } catch (error) {
    console.error("STATE 예외가 발생했습니다:", error.message);
  }
};

const fetchChargeList = async (tradeCaseId) => {
  try {
    const {data} = await tradeCaseChargeService.list(tradeCaseId);
    console.log(data)

    if (data?.value) {
      chargeOptions.value = data.value.map(item => ({
        text: item.userName,
        value: item
      }));
    }
  } catch (error) {
    console.error("예외가 발생했습니다:", error.message);
  }
};

const handleChargeOption = ({value}) => (chargeData.value = value);

const handleBtnSendClick = () => {
  if (isChargeCompleted.value) {
    router.back();
    return;
  }

  // TODO: validation 및 통신
  console.log("send");
}

onMounted(() => {
  fetchChargeState(tradeCaseId);
});
</script>

<style scoped lang="scss">
@import '@priros/common/assets/scss/views/dialog'
</style>