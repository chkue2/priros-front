<template>
  <NuxtLayout name="dialog-header" headerTitle="일정등록 및 추가정보확인">
    <div class="schedule-report-top-container">
      <div class="schedule-report-top-box">
        <p class="report-top-title">잔금일</p>
        <div class="report-date">{{ date }}</div>
      </div>
      <div class="schedule-report-top-box">
        <p class="report-top-title">잔금시간</p>
        <div class="report-form-input">
          <select v-model="hour">
            <option value="">시간</option>
            <option
              v-for="i in Array(10)
                .fill(9)
                .map((x, y) => x + y)"
              :value="zeroStr(i, 2)"
              :key="`h-${i}`"
            >
              {{ zeroStr(i, 2) }}시
            </option>
          </select>
          <select v-model="minute">
            <option value="">분</option>
            <option
              v-for="m in ['00', '10', '20', '30', '40', '50']"
              :key="`m-${m}`"
              :value="m"
            >
              {{ `${m === "00" ? "정각" : `${m}분`}` }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="report-form-container pb180">
      <p class="report-form-help-title">사건정보를 확인 후 체크해주세요</p>
      <p class="report-form-help-content mt9 pb22 bb">
        매매계약의 중요사항이 현장에서 변경되면 대출금지급을 중지하고 은행 또는
        설정대리인에게 연락해야합니다.
      </p>
      <p class="report-form-title mt30 mb14">
        1. 매매계약서에 중요 수정사항이 있나요?
      </p>
      <div class="report-form-input gap16">
        <label>
          <input
            v-model="salePriceModifiedFlag"
            type="radio"
            name="price"
            value="N"
          />
          <i></i>
          <span>없음</span>
        </label>
        <label>
          <input
            v-model="salePriceModifiedFlag"
            type="radio"
            name="price"
            value="Y"
            @change="handlerChangeOpenModalEvent"
          />
          <i></i>
          <span>있음 (매매가격, 매수인 추가/삭제)</span>
        </label>
      </div>
      <p class="report-form-title mt30 mb14">
        2. 계약서 작성 후, 주소전입변동이 있었나요?
      </p>
      <div class="report-form-input gap16">
        <label>
          <input
            v-model="buyerAddressType"
            type="radio"
            name="address"
            value="E"
          />
          <i></i>
          <span>변동없음</span>
        </label>
        <label>
          <input
            v-model="buyerAddressType"
            type="radio"
            name="address"
            value="C"
            @change="handlerChangeOpenModalEvent"
          />
          <i></i>
          <span>변동발생</span>
        </label>
      </div>
      <p class="report-form-title mt30 mb14">
        3. 매수인 현황 및 취득지분을 알려주세요
      </p>
      <div class="report-form-input gap16">
        <label>
          <input
            v-model="acquisitionShareType"
            type="radio"
            name="share"
            value="S"
          />
          <i></i>
          <span>단독명의</span>
        </label>
        <label>
          <input
            v-model="acquisitionShareType"
            type="radio"
            name="share"
            value="M"
          />
          <i></i>
          <span>공동명의</span>
        </label>
      </div>
      <div class="report-form-input">
        <textarea
          v-model="acquisitionShareDetail"
          class="schedule-area mt16"
          placeholder="매수인별로 이름과 취득지분을 입력하세요 (균분일 경우 생략가능)"
        ></textarea>
      </div>
      <p class="report-form-title mt30 mb14">
        4. 등기부상 매수인측이 채무자가 되어 말소할 수 없는 근저당권이 있나요?
        (중도금 지급목적대출 등)
      </p>
      <div class="report-form-input gap16">
        <label>
          <input
            v-model="mortgageRemovableFlag"
            type="radio"
            name="coll"
            value="N"
          />
          <i></i>
          <span>없음</span>
        </label>
        <label>
          <input
            v-model="mortgageRemovableFlag"
            type="radio"
            name="coll"
            value="Y"
          />
          <i></i>
          <span>있음</span>
        </label>
      </div>
    </div>
    <div class="report-bottom-container">
      <div class="bottom-info-text">
        <p class="report-form-help-content">
          • 안내전화 누락 민원이 자주 발생하고 있습니다.
        </p>
        <p class="report-form-help-content mt12">
          • 반드시 준비사항을 안내하고 업무보고를 수행하세요.
        </p>
      </div>
      <CommonBottomButton
        id="btn-send"
        text="일정등록"
        backgroundColor="#000000"
        height="60px"
        width="100%"
        color="#fff"
        :font-weight="700"
        @handler-click-button="handleBtnSendClick"
      />
    </div>
    <div class="dialog-wrapper">
      <div class="bottom">
        <div></div>
      </div>
    </div>
    <CommonAlertModal
      v-if="isSuccessModalShow"
      text="일정보고가 완료되었습니다."
      @handler-click-button="toggleSuccessModal"
    />
    <ReportChangeHelpModal
      v-if="isReportChangeHelpModalShow"
      @handler-click-button="toggleReportChangeHelpModal"
    />
  </NuxtLayout>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

import CommonBottomButton from "@priros/common/components/button/CommonBottomButton.vue";
import CommonAlertModal from "@priros/common/components/modal/CommonAlertModal.vue";
import ReportChangeHelpModal from "~/components/modal/ReportChangeHelpModal.vue";

import { isEmpty, zeroStr } from "@priros/common/assets/js/utils.js";
import { tradeCaseScheduleReport } from "~/services/tradeCaseScheduleReport.js";

definePageMeta({
  layout: false,
});

const hour = ref("");
const minute = ref("");
const date = ref("");
const salePriceModifiedFlag = ref("");
const buyerAddressType = ref("");
const acquisitionShareType = ref("");
const acquisitionShareDetail = ref("");
const mortgageRemovableFlag = ref("");

const isReportChangeHelpModalShow = ref(false);

const route = useRoute();
const router = useRouter();
const tradeCaseId = route.params.id;

onMounted(() => {
  tradeCaseScheduleReport
    .get(tradeCaseId)
    .then(({ data }) => {
      if (!isEmpty.data) {
        date.value = data.issueDate.split("T")[0];
        hour.value = data.issueTime.slice(0, 2);
        minute.value = data.issueTime.slice(2, 4);
        salePriceModifiedFlag.value = data.salePriceModifiedFlag;
        buyerAddressType.value = data.buyerAddressType;
        acquisitionShareType.value = data.acquisitionShareType;
        acquisitionShareDetail.value = data.acquisitionShareDetail;
        mortgageRemovableFlag.value = data.mortgageRemovableFlag;
      }
    })
    .catch((e) => {
      alert(e.response.data.message.replace(/<br>/gi, "\n"));
      router.back();
    });
});

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
  );
});

const isSuccessModalShow = ref(false);
const toggleSuccessModal = () => {
  isSuccessModalShow.value = !isSuccessModalShow.value;
};

const handleBtnSendClick = () => {
  if (!formValidation.value) {
    if (isEmpty(date.value)) {
      alert("잔금일을 선택해주세요");
    } else if (isEmpty(hour.value)) {
      alert("잔금 시간(시간)을 선택해주세요");
    } else if (isEmpty(minute.value)) {
      alert("잔금 시간(분)을 선택해주세요");
    } else if (isEmpty(date.value)) {
      alert("잔금일을 선택해주세요");
    } else if (isEmpty(salePriceModifiedFlag.value)) {
      alert("매매가격 수정 여부를 선택해주세요");
    } else if (isEmpty(buyerAddressType.value)) {
      alert("주소전입변동 여부를 선택해주세요");
    } else if (isEmpty(acquisitionShareType.value)) {
      alert("매수인별 취득지분을 선택해주세요");
    } else if (isEmpty(mortgageRemovableFlag.value)) {
      alert("근저당권 변동 여부를 선택해주세요");
    }

    return false;
  }

  tradeCaseScheduleReport
    .post(tradeCaseId, {
      issueDate: date.value,
      issueTime: `${hour.value}${minute.value}`,
      salePriceModifiedFlag: salePriceModifiedFlag.value,
      buyerAddressType: buyerAddressType.value,
      acquisitionShareType: acquisitionShareType.value,
      acquisitionShareDetail: acquisitionShareDetail.value,
      mortgageRemovableFlag: mortgageRemovableFlag.value,
    })
    .then(() => {
      toggleSuccessModal();
    })
    .catch((e) => {
      alert(e.response.data.message.replace(/<br>/gi, "\n"));
      console.log(e);
    });
};

const toggleReportChangeHelpModal = () => {
  isReportChangeHelpModalShow.value = !isReportChangeHelpModalShow.value;
};

const handlerChangeOpenModalEvent = (e) => {
  if (["Y", "C"].includes(e.target.value)) {
    toggleReportChangeHelpModal();
  }
};
</script>

<style scoped lang="scss">
@import "~/assets/scss/report/form.scss";
.schedule-report-top-container {
  padding: 30px 16px;
  display: flex;
  gap: 20px;
}
.schedule-report-top-box {
  flex: 1;
}
.report-date {
  width: 100%;
  padding: 0 12px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid #c6c6c6;
  background-color: #f3f3f3;
  font-weight: $ft-semibold;
  color: #3182f7;
}
.bottom-info-text {
  padding: 22px 16px;
  background-color: #ffffff;
}
</style>
