<template>
  <div v-if="isEdit" class="transfer-result-container">
    <p
      class="transfer-result-title"
      :class="[
        { fail: transferStore.remitState === 'N' },
        { success: transferStore.remitState === 'Y' },
      ]"
    >
      {{ resultContents.title }}
    </p>
    <p class="transfer-result-content">{{ resultContents.content }}</p>
    <p
      v-if="transferStore.remitState === 'W'"
      class="transfer-result-help-content"
    >
      송금요청 내용 중에 수정이 필요한 경우<br />고객센터로 연락부탁드립니다.
    </p>
  </div>
  <div class="transfer-top-container" :class="{ bb: !isEdit }">
    <div class="transfer-top-amount">
      <div>
        <p class="transfer-top-title">대출금</p>
        <div class="transfer-top-input">
          <input v-model="transferStore.mortgageLoan" type="text" readonly />
          <span>원</span>
        </div>
      </div>
      <div>
        <p class="transfer-top-title">대출실행금</p>
        <div class="transfer-top-input">
          <input
            v-model="transferStore.mortgageExecution"
            type="text"
            readonly
          />
          <span>원</span>
        </div>
      </div>
    </div>
    <label v-if="transferStore.directLawYn" class="transfer-top-intro">
      <input
        v-if="!isTransferApply && !isEdit"
        v-model="transferStore.deductionYn"
        type="checkbox"
        @click="handlerClickDeducationCheckbox"
      />
      금융기관의 설정비용(채권/인지)을 공제하지 않고 대출금 전액을 송금요청
      합니다.
    </label>
  </div>
  <!-- <div class="transfer-type-container">
    <p class="transfer-type-title">송금방식</p>
    <DropDown
      :options="[
        { value: 'only', text: '일괄송금' },
        { value: 'split', text: '분할송금' },
      ]"
      :is-readonly="isSaved"
      :selected-text="transferTypeText"
      @click-option="handlerClickTransferType"
    />
  </div> -->
  <div v-if="isLoadingSuccess" class="transfer-account-container">
    <TransferAccountCard
      v-for="(t, index) in transferStore.transfer"
      :key="index"
      :idx="index"
      :transfer-data="t"
      :is-saved="isSaved || isSuccess"
    />
  </div>
  <div class="transfer-memo-container">
    <p class="transfer-memo-title">송금메모</p>
    <textarea
      v-model="transferStore.memo"
      class="transfer-memo-area"
      :class="{ 'read-only': isSaved }"
      placeholder="송금메모를 입력해주세요. (최대 50자 이내)"
      :readonly="isSaved"
      maxlength="50"
    ></textarea>
  </div>
  <div class="transfer-warning-container">
    <p class="transfer-warning-text">
      • 송금 사건별로 순차 진행되므로 약 10~20분이 소요됩니다.<br />
      • 송금요청장애 문의전화 <a href="tel:1670-2361">1670-2361</a>
    </p>
  </div>
  <div v-if="!isSuccess" class="transfer-approval-container">
    <p class="approval-title">
      송금 승인번호
      <button
        v-if="isApprovalSend && !isApprovalApply"
        class="approval-re-send"
        @click="handlerClickApprovalSendButton"
      >
        재전송
      </button>
    </p>
    <div class="approval-input">
      <input
        v-model="authNum"
        :maxlength="MAX_LENGTH"
        type="tel"
        :readonly="!isApprovalSend || isApprovalApply"
      />
      <span v-if="isApprovalSend && !isApprovalApply" class="approval-timer"
        >{{ timerMin }}분 {{ timerSec }}초</span
      >
      <button
        v-if="!isApprovalSend"
        :class="{ active: isSaved }"
        @click="handlerClickApprovalSendButton"
      >
        승인번호발송
      </button>
      <button
        v-if="isApprovalSend"
        :class="{ active: !isApprovalApply }"
        @click="handlerClickApprovalApplyButton"
      >
        확인
      </button>
    </div>
  </div>
  <div v-if="!isSuccess" class="transfer-account-bottom-button">
    <CommonBottomButton
      v-if="!isSaved"
      id="transferAccountSaveButton"
      text="저장"
      height="60px"
      width="50%"
      :background-color="isAccountValidation ? '#3182F7' : '#d8d9db'"
      :font-weight="700"
      @handler-click-button="handlerClickSaveButton"
    />
    <CommonBottomButton
      v-if="isSaved"
      id="transferAccountEditButton"
      text="수정하기"
      height="60px"
      width="50%"
      background-color="#3182F7"
      :font-weight="700"
      @handler-click-button="handlerClickEditButton"
    />
    <CommonBottomButton
      id="transferAccountSuccessButton"
      text="닫기"
      height="60px"
      width="50%"
      :font-weight="700"
      @handler-click-button="handlerClickSuccessButton"
    />
  </div>
  <div v-if="isSuccess" class="transfer-account-bottom-button">
    <CommonBottomButton
      id="transferAccountSuccessButton"
      text="닫기"
      height="60px"
      width="100%"
      :font-weight="700"
      @handler-click-button="handlerClickSuccessButton"
    />
  </div>
  <CommonAlertModal
    v-if="isApprovalSendAlarmModalShow"
    text="매수인에게 승인번호가 발송되었습니다.<br>알림톡을 확인해주세요"
    @handler-click-button="toggleApprovalSendAlarmModalShow"
  />
  <CommonAlertModal
    v-if="false"
    text="송금요청은<br>잔금시간 30분 전부터 가능합니다.<br>잠시후 이용해주세요!"
  />
  <CommonAlertModal
    v-if="isTransferApplyModalShow"
    text="송금요청이 완료되었습니다.<br>담당자 확인까지 <b>최대 30분</b> 소요됩니다."
    @handler-click-button="toggleTransferApplyModalShow"
  />
</template>

<script setup>
import CommonBottomButton from "@priros/common/components/button/CommonBottomButton.vue";
import CommonAlertModal from "@priros/common/components/modal/CommonAlertModal.vue";
import { computed, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import TransferAccountCard from "~/components/card/TransferAccountCard.vue";
import { useTransferStore } from "~/store/case/transfer.js";
import { useAlertStore } from "~/store/alert.js";

const router = useRouter();
const route = useRoute();
const tradeCaseId = route.params.id;

const transferStore = useTransferStore();
const alertStore = useAlertStore();

const isSaved = ref(false);
const isApprovalSend = ref(false);
const isApprovalApply = ref(false);
const isTransferApply = ref(false);
const isApprovalSendAlarmModalShow = ref(false);
const isTransferApplyModalShow = ref(false);

const isLoadingSuccess = ref(false);
onMounted(() => {
  callApi();
});

watch(
  () => transferStore.remitState,
  () => {
    setState();
  }
);
const isEdit = computed(
  () =>
    ["W", "Y", "N"].includes(transferStore.remitState) &&
    transferStore.remitRequestFlag === "Y"
);
const isSuccess = computed(
  () =>
    ["W", "Y"].includes(transferStore.remitState) &&
    transferStore.remitRequestFlag === "Y"
);

const resultContents = computed(() => {
  return transferStore.remitState === "W"
    ? {
        title: "담당자가 서류검토중 입니다",
        content: "담당자 확인까지 최대 30분정도 소요될 수 있습니다.",
      }
    : transferStore.remitState === "Y"
      ? {
          title: "승인완료",
          content: "고객님의 송금요청이 승인완료되었습니다.",
        }
      : {
          title: "승인거절",
          content: transferStore.rejectMessage,
        };
});

const transferTypeText = computed(() =>
  transferStore.transferType === "only" ? "일괄송금" : "분할송금"
);

const isAccountValidationEmpty = (t) => {
  // 입력된 칸이 하나라도 있는 경우 false
  for (const v of transferStore.validate) {
    if (
      t[v] !== null &&
      t[v] !== undefined &&
      t[v]?.replaceAll(" ", "") !== "" &&
      t[v] !== "0"
    ) {
      return false;
    }
  }
  return true;
};

const isAccountValidationAllCheck = (t) => {
  // 한칸이라도 비어있으면 false
  // 모든 칸이 입력되면 true
  for (const v of transferStore.validate) {
    if (
      t[v] === null ||
      t[v] === undefined ||
      t[v]?.replaceAll(" ", "") === "" ||
      t[v] === "0"
    )
      return false;
  }
  return true;
};

const isAccountValidation = computed(() => {
  if (transferStore.transfer.length === 1) {
    return isAccountValidationAllCheck(transferStore.transfer[0]);
  } else {
    return (
      !(
        isAccountValidationEmpty(transferStore.transfer[0]) &&
        isAccountValidationEmpty(transferStore.transfer[1])
      ) &&
      (isAccountValidationEmpty(transferStore.transfer[0])
        ? true
        : isAccountValidationAllCheck(transferStore.transfer[0])) &&
      (isAccountValidationEmpty(transferStore.transfer[1])
        ? true
        : isAccountValidationAllCheck(transferStore.transfer[1]))
    );
  }
});
const setState = () => {
  if (transferStore.remitRequestFlag === "Y") {
    isSaved.value = true;
  }
  if (transferStore.remitRequestFlag === "Y") {
    isTransferApply.value = true;
  }
  if (transferStore.approveYn === "Y") {
    isApprovalSend.value = true;
    isApprovalApply.value = true;
  }
};
const toggleApprovalSendAlarmModalShow = () => {
  isApprovalSendAlarmModalShow.value = !isApprovalSendAlarmModalShow.value;
};
const toggleTransferApplyModalShow = () => {
  isTransferApplyModalShow.value = !isTransferApplyModalShow.value;
};

const callApi = () => {
  Promise.all([transferStore.fetchRemit(tradeCaseId)])
    .catch((e) => {
      alertStore.open(e.response.data.message);
      router.back();
    })
    .finally(() => {
      setState();
      isLoadingSuccess.value = true;
    });
};

const handlerClickSaveButton = () => {
  if (!isAccountValidation.value) {
    alertStore.open("계좌의 정보를 모두 입력해주세요.");
    return;
  }

  transferStore
    .postRemit(tradeCaseId)
    .then(() => {
      isSaved.value = true;
      transferStore.fetchRemit(tradeCaseId);
    })
    .catch((e) => {
      alertStore.open(e.response.data.message);
    });
};

const timer = ref(0);
const timerMin = ref(0);
const timerSec = ref(0);
const timerInterval = ref(null);
const handlerClickApprovalSendButton = () => {
  if (isSuccess.value) return false;
  if (!isSaved.value) {
    alertStore.open("계좌 정보를 먼저 저장해주세요.");
    return;
  }

  transferStore
    .postAuth(tradeCaseId)
    .then(() => {
      clearInterval(timerInterval.value);
      timerInterval.value = null;
      timer.value = 300;
      timerInterval.value = setInterval(() => {
        timer.value -= 1;
        timerMin.value = Math.floor(timer.value / 60);
        timerSec.value = timer.value % 60;

        if (timer.value === 0) {
          clearInterval(timerInterval.value);
          timerInterval.value = null;
          isApprovalSend.value = false;
        }
      }, 1000);
      isApprovalSend.value = true;
      toggleApprovalSendAlarmModalShow();
    })
    .catch((e) => {
      alertStore.open(e.response.data.message);
    });
};

const authNum = ref("");
const MAX_LENGTH = 6;
const handlerClickApprovalApplyButton = () => {
  if (authNum.value.length < MAX_LENGTH) {
    alertStore.open("인증번호 6자리를 입력해주세요.");
    return false;
  }

  transferStore
    .postAuthCheck(tradeCaseId, authNum.value)
    .then(() => {
      clearInterval(timerInterval.value);
      timerInterval.value = null;
      isApprovalApply.value = true;
      alertStore.open("송금요청이 전송되었습니다.");
      window.scrollTo({ top: 0, behavior: "smooth" });
      callApi();
    })
    .catch((e) => {
      alertStore.open(e.response.data.message.replace(/<br>/gi, "\n"));
    });
};

const handlerClickEditButton = () => {
  isSaved.value = false;
  isApprovalSend.value = false;
  isApprovalApply.value = false;
};

// 송금요청 버튼 따로 있을 때 사용하던 로직
// 현재는 인증완료시 송금요청이 바로 되는 상황이라 사용하지 않음.
// const handlerClickTransferApplyButton = () => {
//   if (!isApprovalApply.value) {
// alertStore.open("인증을 완료해주세요.");
//     window.scrollTo({ top: 9999, behavior: "smooth" });
//     return;
//   }
//   transferStore
//     .requestRemit(tradeCaseId)
//     .then(() => {
//       toggleTransferApplyModalShow();
//       transferStore.fetchRemit(tradeCaseId);
//     })
//     .catch((e) => {
// alertStore.open(e.response.data.message.replace(/<br>/gi, "\n"));
//     });
// };

const handlerClickSuccessButton = () => {
  router.back();
};

const handlerClickDeducationCheckbox = (e) => {
  if (isSaved.value) {
    e.preventDefault();
    return false;
  }
};

const handlerClickTransferType = ({ value }) => {
  transferStore.transferType = value;
  if (value === "only" && transferStore.transfer.length > 1) {
    transferStore.setTransferDataMinus();
  } else if (value === "split" && transferStore.transfer.length === 1) {
    transferStore.setTransferDataPlus();
  }
};
</script>

<style scoped lang="scss">
@import "@priros/common/assets/scss/transfer/common.scss";
.transfer-top-container {
  padding: 40px 16px 26px;
  &.bb {
    border-bottom: 8px solid #f2f3f5;
  }
}
.transfer-top-amount {
  display: flex;
  gap: 16px;
  & > div {
    flex: 1;
    max-width: calc(50% - 8px);
  }
  .transfer-top-title {
    font-weight: $ft-bold;
    margin-bottom: 9px;
  }
  .transfer-top-input {
    position: relative;
    & > input[type="text"] {
      border-radius: 4px;
      background-color: #f9f9f9;
      color: #4f4f4f;
      border: none;
      padding: 10px 30px 10px 10px;
      max-width: 100%;
      font-size: 16px;
    }
    & > span {
      position: absolute;
      top: 45%;
      transform: translateY(-50%);
      right: 12px;
      font-size: 14px;
      color: #4f4f4f;
      font-weight: $ft-bold;
    }
  }
}
.transfer-top-intro {
  margin-top: 30px;
  font-size: 12px;
  line-height: 17px;
  word-break: keep-all;
  display: flex;
  align-items: center;
  gap: 8px;
  & > input {
    width: 23px;
    height: 23px;
  }
}
.transfer-account-container {
  padding: 0px 9px;
}
.transfer-account-button-container {
  padding: 0 16px 0;
}
.account-edit-button {
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: 1px dotted #a7a7a7;
  border-radius: 4px;
  font-size: 14px;
  color: #c6c6c6;
  background-color: #ffffff;
  &.edit--minus {
    .account-edit-icon {
      background: url(/img/icon/minus-white.svg) no-repeat center/11px;
      background-color: #ff4d4d;
    }
  }
  &.active {
    .account-edit-icon {
      background-color: #7ef422;
    }
  }
  .account-edit-icon {
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: url(/img/icon/plus-white.svg) no-repeat center/14px;
    background-color: #d8d8d8;
  }
}
.transfer-warning-container {
  padding: 19px 16px 30px;
  .transfer-warning-text {
    font-size: 12px;
    margin-top: 10px;
    line-height: 25px;
    a {
      font-weight: $ft-bold;
      color: #252525;
    }
  }
}
.transfer-approval-container {
  padding: 26px 16px 80px;
  border-top: $border-bottom-between-header;
  .approval-title {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    font-size: 19px;
    font-weight: $ft-bold;
    margin-bottom: 6px;
    .approval-re-send {
      border: none;
      background-color: transparent;
      font-size: 14px;
      font-weight: $ft-medium;
      color: #606060;
      text-decoration: underline;
    }
  }
  .approval-input {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #bebebe;
    background-color: #ffffff;
    padding: 0 9px;
    position: relative;
    & > input {
      border: none;
      font-size: 16px;
      max-width: 165px;
    }
    & > button {
      min-width: 105px;
      padding: 7.5px 20px;
      font-size: 12px;
      font-weight: $ft-medium;
      color: #ffffff;
      border-radius: 5px;
      background-color: #b5b5b5;
      border: none;
      &.active {
        background-color: #235bed;
      }
    }
    .approval-timer {
      position: absolute;
      top: 50%;
      right: 130px;
      transform: translateY(-50%);
      font-size: 12px;
      font-weight: $ft-medium;
      color: #e92c2c;
    }
  }
}
.transfer-account-bottom-button {
  position: sticky;
  bottom: 0;
  display: flex;
}
.transfer-result-container {
  padding: 20px 16px;
  text-align: center;
  border-bottom: $border-bottom-between-header;
  .transfer-result-title {
    display: inline-block;
    padding: 4px 20px 5px;
    line-height: 16px;
    font-weight: $ft-semibold;
    border-radius: 22.5px;
    border: 1px solid #000000;
    text-align: center;
    margin: 0 auto;
    &.fail {
      background-color: #e92c2c;
      color: #ffffff;
      border: none;
    }
    &.success {
      background-color: #235bed;
      color: #ffffff;
      border: none;
    }
  }
  .transfer-result-content {
    margin-top: 6px;
    font-size: 14px;
    font-weight: $ft-medium;
    text-align: center;
  }
  .transfer-result-help-content {
    margin-top: 8px;
    padding: 2px;
    background-color: #ececec;
    color: #304b78;
    font-size: 12px;
    font-weight: $ft-medium;
  }
}
.transfer-type-container {
  padding: 18px 16px 24px;
  .transfer-type-title {
    font-size: 14px;
    font-weight: $ft-bold;
    margin-bottom: 8px;
  }
}
</style>
