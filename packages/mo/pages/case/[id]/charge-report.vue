<template>
  <NuxtLayout name="dialog-header" headerTitle="담당자 보고">
    <div class="dialog-wrapper">
      <div class="container">
        <div class="inner-body mt16">
          <div class="form-group">
            <div class="label">
              <label class="form-label">담당자</label>
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
                <col style="width: 60px" />
                <col />
              </colgroup>

              <tbody>
                <tr>
                  <th>상호</th>
                  <td>{{ chargeData.firmName }}</td>
                </tr>
                <tr>
                  <th>이름</th>
                  <td>
                    {{ chargeData.userName }} (ID:{{ chargeData.userId }})
                  </td>
                </tr>
                <tr>
                  <th>연락처</th>
                  <td>{{ rexFormatPhone(chargeData.mobile) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="charge-bottom-text">
          <p class="charge-bottom-title">담당자보고 주의사항</p>
          <p class="charge-bottom-content">
            • 안내전화 누락 민원이 자주 발생하고 있습니다.
          </p>
          <p class="charge-bottom-content">
            • 반드시 준비사항을 안내하고 업무보고를 수행하세요.
          </p>
        </div>
        <div>
          <CommonBottomButton
            id="btn-send"
            text="담당자 보고"
            backgroundColor="#000000"
            height="60px"
            width="100%"
            color="#fff"
            :font-weight="700"
            :disabled="btnSendDisable"
            @handler-click-button="handleBtnSendClick"
          />
        </div>
      </div>
    </div>
    <CommonAlertModal
      v-if="isSuccessModalShow"
      text="담당자 보고가 완료되었습니다."
      @handler-click-button="toggleSuccessModal"
    />
  </NuxtLayout>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

import DropDown from "@priros/common/components/form/DropDown";
import CommonBottomButton from "@priros/common/components/button/CommonBottomButton.vue";
import CommonAlertModal from "@priros/common/components/modal/CommonAlertModal.vue";

import { tradeCaseChargeReport } from "~/services/tradeCaseChargeReport.js";
import { rexFormatPhone } from "@priros/common/assets/js/utils.js";
import { useAlertStore } from "~/store/alert.js";

definePageMeta({
  layout: false,
});

const alertStore = useAlertStore();

const chargeOptions = ref([]);
const chargeData = ref(null);

const tradeCaseId = useRoute().params.id;

const chargeSelectText = computed(() =>
  chargeData.value
    ? `${chargeData.value?.userName} (${chargeData.value?.userId})`
    : ""
);

const btnSendDisable = computed(() => !chargeData.value);

onMounted(() => {
  fetchChargeList();
});

const isSuccessModalShow = ref(false);
const toggleSuccessModal = () => {
  isSuccessModalShow.value = !isSuccessModalShow.value;
};

const router = useRouter();
const fetchChargeList = () => {
  tradeCaseChargeReport
    .get(tradeCaseId)
    .then(({ data }) => {
      chargeOptions.value = data.userList.map((u) => {
        return {
          text: `${u.userName} (${u.userId})`,
          value: u,
        };
      });
      chargeData.value = data.charger;
    })
    .catch((e) => {
      alertStore.open(e.response.data.message);
      router.back();
    });
};

const requestCharge = () => {
  tradeCaseChargeReport
    .post(tradeCaseId, { tradeCaseId, userId: chargeData.value.userId })
    .then(() => {
      toggleSuccessModal();
    })
    .catch((e) => {
      alertStore.open(e.response.data.message);
    });
};

const handleChargeOption = ({ value }) => (chargeData.value = value);

const handleBtnSendClick = () => {
  if (chargeData.value === null) {
    alertStore.open("담당자를 선택해주세요");
    return false;
  }

  requestCharge();
};
</script>

<style scoped lang="scss">
@import "@priros/common/assets/scss/views/dialog";
.charge-bottom-text {
  padding: 27px 14px;
  .charge-bottom-title {
    font-weight: $ft-semibold;
    margin-bottom: 16px;
  }
  .charge-bottom-content {
    font-size: 12px;
    font-weight: $ft-medium;
    & + .charge-bottom-content {
      margin-top: 5px;
    }
  }
}
</style>
