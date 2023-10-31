<template>
  <NuxtLayout name="dialog-header" headerTitle="담당자 보고">
    <div class="wrapper">
      <div class="container">
        <div class="inner-header">
          <span class="badge" :class="captionClass">{{ captionText }}</span>
          <div class="txt-help" v-html="description"></div>
        </div>
        <div class="inner-body">
          <div class="form-group" v-if="!isChargeCompleted">
            <div class="label">
              <label class="form-label">담당자 정보</label>
            </div>

            <DropDown
                placeholder="담당자 정보"
                :options="chargeOptions"
                :selected-text="chargeSelectText"
                @click-option="handleChargeOption"
            />
          </div>
          <div v-if="chargeData" class="charge-content">
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

//
import DropDown from '@priros/common/components/form/DropDown'
import CommonBottomButton from "~/components/button/CommonBottomButton";
import {tradeCaseChargeService} from "~/services/tradeCaseChargeService.js";


definePageMeta({
  layout: false
});


const router = useRouter();
const chargeOptions = ref([]);
const chargeData = ref(null);
const isChargeCompleted = ref(false);

const tradeCaseId = useRoute().params.id;

const fetchChargeState = async (tradeCaseId) => {
  try {
    const {data} = await tradeCaseChargeService.state(tradeCaseId);
    chargeData.value = data || null;
    isChargeCompleted.value = !!data;

    if (!data)
      fetchChargeList(tradeCaseId);

  } catch (error) {
    console.error("STATE 예외가 발생했습니다:", error.message);
  }
};

const fetchChargeList = async (tradeCaseId) => {
  try {
    const {data} = await tradeCaseChargeService.list(tradeCaseId);

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

const description = computed(() => {
  if (isChargeCompleted.value) {
    return `
      담당자 프로필이 발송되었습니다.<br>
      고객님께 안내된 담당자와 현장방문자가 <br>
      동일하도록 관리해주세요
    `;
  } else {
    return `
      담당자의 프로필이 고객에게 알림톡으로 전송됩니다.<br>
      연락처 및 담당자의 정보를 확인해주세요.
    `;
  }
});

const btnSendText = computed(() => isChargeCompleted.value ? '닫기' : '담당자 보고');
const chargeSelectText = computed(() => chargeData.value?.userName || "");
const captionClass = computed(() => chargeData.value ? "badge-primary-gradient" : "badge-secondary");
const captionText = computed(() => isChargeCompleted.value ? '담당자보고 완료': "담당자 보고전 확인");
const btnSendDisable = computed(() => !chargeData.value);

const handleChargeOption = ({value}) => (chargeData.value = value);
const handleBtnSendClick = () => {
  if (isChargeCompleted.value) {
    router.back();
    return;
  }

  console.log("send");
}

onMounted(() => {

  fetchChargeState(tradeCaseId);
});
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 68px);

  .bottom {
    margin-top: auto;
  }
}


.inner-header {
  margin-top: 24px;

  .txt-help {
    margin-top: 12px;
  }
}

.inner-body {
  margin-top: 44px;

  .form-group + .charge-content{
    margin-top: 44px;
  }
}

.charge-content {
  padding-bottom: 18px;
  border-bottom: 1px solid $secondary-border;
}

.tbl {
  font: {
    size: 14px;
    weight: 400;
  }
  line-height: 1.14;

  th, td {
    padding: 6px 0;
  }

  th {
    text-align: left;
    color: #acacac;
    font: inherit;
  }

  td {
    text-align: left;
    font: inherit;
  }
}

.bottom{
  .info{
    margin-bottom: 16px;
    text-align: center;
    color: #9f9f9f;
    font: {
      size:12px;
      weight: 500;
    }
    line-height: 1.4;
  }
}
</style>