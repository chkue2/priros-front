<template>
  <NuxtLayout name="dialog-header" headerTitle="신청정보 보고">
    <div class="application-report-container pt30 pl16 pr16 pb40">
      <p class="application-report-title mb10">등기신청서 작성정보</p>
      <div class="report-form-input mb15">
        <textarea
          v-model="form['registrationApplication']"
          placeholder="등기신청서 작성 ID 및 작성번호를 입력하세요"
        ></textarea>
      </div>
      <p class="application-report-title mb10">전달사항</p>
      <div class="report-form-input">
        <textarea
          v-model="form['memo']"
          placeholder="설정대리인에게 전달할 내용을 입력하세요"
        ></textarea>
      </div>
    </div>
    <div class="report-form-container pb100">
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
            v-model="form['salePriceModifiedFlag']"
            type="radio"
            name="price"
            value="N"
          />
          <i></i>
          <span>없음</span>
        </label>
        <label>
          <input
            v-model="form['salePriceModifiedFlag']"
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
            v-model="form['buyerAddressType']"
            name="buyerAddressType"
            type="radio"
            value="E"
          />
          <i></i>
          <span>변동없음</span>
        </label>
        <label>
          <input
            v-model="form['buyerAddressType']"
            name="buyerAddressType"
            type="radio"
            value="C"
          />
          <i></i>
          <span>변동발생</span>
        </label>
      </div>
      <div
        v-if="form['buyerAddressType'] === 'C'"
        class="report-form-input mt8"
      >
        <input
          ref="fileList"
          type="file"
          multiple
          accept=".gif, .jpg, .jpeg, .png, .pdf, .bmp, .tif, .tiff"
          @change="handlerChangeFileList"
        />
        <p class="input-file" @click="handlerClickFileList">
          {{ filePreviewName }}
          <img src="/img/icon/file-gray.png" alt="" />
        </p>
      </div>
      <p class="report-form-title mt30 mb14">
        3. 매수인 현황 및 취득지분을 알려주세요
      </p>
      <div class="report-form-input gap16">
        <label>
          <input
            v-model="form['acquisitionShareType']"
            type="radio"
            name="share"
            value="S"
          />
          <i></i>
          <span>단독명의</span>
        </label>
        <label>
          <input
            v-model="form['acquisitionShareType']"
            type="radio"
            name="share"
            value="M"
          />
          <i></i>
          <span>공동명의</span>
        </label>
      </div>
      <div
        v-if="form['acquisitionShareType'] === 'M'"
        class="report-form-input mt16"
      >
        <textarea
          v-model="form['acquisitionShareDetail']"
          placeholder="매수인별로 이름과 취득지분을 입력하세요"
        ></textarea>
      </div>
      <p class="report-form-title mt30 mb14">
        4. 등기부상 매수인측이 채무자가 되어 말소할 수 없는 근저당권이 있나요?
        (중도금 지급목적대출 등)
      </p>
      <div class="report-form-input gap16">
        <label>
          <input
            v-model="form['mortgageRemovableFlag']"
            type="radio"
            name="coll"
            value="N"
          />
          <i></i>
          <span>없음</span>
        </label>
        <label>
          <input
            v-model="form['mortgageRemovableFlag']"
            type="radio"
            name="coll"
            value="Y"
            @change="handlerChangeOpenModalEvent"
          />
          <i></i>
          <span>있음</span>
        </label>
      </div>
    </div>
    <div class="report-bottom-container">
      <div>
        <CommonBottomButton
          id="btn-send"
          text="수정하기"
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
    <CommonAlertModal
      v-if="isSuccessModalShow"
      text="신청정보 보고가 완료되었습니다."
      @handler-click-button="toggleSuccessModal"
    />
    <ReportChangeHelpModal
      v-if="isReportChangeHelpModalShow"
      @handler-click-button="toggleReportChangeHelpModal"
    />
    <ReportChangeFailModal
      v-if="isReportChangeFailModalShow"
      title="[신청정보보고 실패]"
      @handler-click-button="toggleReportChangeFailModal"
    />
  </NuxtLayout>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

import { tradeCaseRequestReport } from "~/services/tradeCaseRequestReport";
import { isEmpty } from "@priros/common/assets/js/utils.js";
import { useAlertStore } from "~/store/alert.js";

import CommonBottomButton from "@priros/common/components/button/CommonBottomButton.vue";
import CommonAlertModal from "@priros/common/components/modal/CommonAlertModal.vue";
import ReportChangeHelpModal from "~/components/modal/ReportChangeHelpModal.vue";
import ReportChangeFailModal from "~/components/modal/ReportChangeFailModal.vue";

definePageMeta({
  layout: false,
});

const route = useRoute();
const router = useRouter();
const tradeCaseId = route.params.id;
const alertStore = useAlertStore();

const form = ref({
  registrationApplication: "",
  acquisitionShareType: "",
  acquisitionShareDetail: "",
  buyerAddressType: "",
  memo: "",
  requestReportFileList: [],
  salePriceModifiedFlag: "",
  mortgageRemovableFlag: "",
});
const fileList = ref(null);
const fileListObj = ref(null);

const isReportChangeHelpModalShow = ref(false);
const isReportChangeFailModalShow = ref(false);

onMounted(() => {
  tradeCaseRequestReport
    .get(tradeCaseId)
    .then(({ data }) => {
      if (data) {
        form.value = data;
      }
    })
    .catch((e) => {
      alertStore.open(e.response.data.message);
      router.back();
    });
});

const isSuccessModalShow = ref(false);
const toggleSuccessModal = () => {
  isSuccessModalShow.value = !isSuccessModalShow.value;
};

const filePreviewName = computed(() => {
  return fileListObj.value !== null && fileListObj.value.length === 1
    ? fileListObj.value[0].name
    : fileListObj.value !== null && fileListObj.value.length > 1
      ? `${fileListObj.value[0].name} 외 ${fileListObj.value.length - 1}개`
      : form.value.requestReportFileList.length === 1
        ? form.value.requestReportFileList[0].fileName
        : form.value.requestReportFileList.length > 1
          ? `${form.value.requestReportFileList[0].fileName} 외 ${form.value.requestReportFileList.length - 1}개`
          : "매수인의 주민등록초본을 첨부해주세요";
});

const btnSendDisable = false;

const formValidation = computed(() => {
  const validateEnum = [
    "salePriceModifiedFlag",
    "registrationApplication",
    "acquisitionShareType",
    "buyerAddressType",
    "mortgageRemovableFlag",
  ];
  for (const v of validateEnum) {
    if (isEmpty(form.value[v])) return false;
  }

  if (
    form.value["acquisitionShareType"] === "M" &&
    form.value["acquisitionShareDetail"] === ""
  ) {
    return false;
  }

  if (
    form.value["buyerAddressType"] === "C" &&
    form.value.requestReportFileList.length === 0 &&
    fileListObj.value === null
  ) {
    return false;
  }

  return true;
});

const isSaleFlagAndRemovableFlagY = computed(
  () =>
    form.value["salePriceModifiedFlag"] === "Y" ||
    form.value["mortgageRemovableFlag"] === "Y"
);

const handlerClickFileList = () => {
  fileList.value.click();
};
const handlerChangeFileList = (e) => {
  if (e.target.files.length === 0) return false;
  const files = Array.from(e.target.files);
  if (files.length > 5) {
    alertStore.open("파일은 한번에 최대 5개까지만 첨부 가능합니다.");
    return false;
  }
  for (let file of files) {
    if (file.size > 10 * 1024 * 1024) {
      alertStore.open("10MB 이상의 파일은 첨부할 수 없습니다.");
      return false;
    }
  }
  fileListObj.value = files;
  form.value.requestReportFileList = fileListObj.value;
};

const handleBtnSendClick = () => {
  if (!formValidation.value) {
    if (isEmpty(form.value["salePriceModifiedFlag"])) {
      alertStore.open("매매계약서 중요 수정사항을 선택해주세요");
    } else if (isEmpty(form.value["registrationApplication"])) {
      alertStore.open("등기신청서 작성정보를 입력해주세요");
    } else if (isEmpty(form.value["acquisitionShareType"])) {
      alertStore.open("매수인별 취득지분 명의를 선택해주세요");
    } else if (
      form.value["acquisitionShareType"] === "M" &&
      isEmpty(form.value["acquisitionShareDetail"])
    ) {
      alertStore.open("매수인별 취득지분을 입력해주세요");
    } else if (isEmpty(form.value["buyerAddressType"])) {
      alertStore.open("매수인 주소변동 여부를 선택해주세요");
    } else if (
      form.value["buyerAddressType"] === "C" &&
      form.value.requestReportFileList.length === 0 &&
      fileListObj.value === null
    ) {
      alertStore.open("매수인의 주민등록초본을 첨부해주세요");
    } else if (isEmpty(form.value["mortgageRemovableFlag"])) {
      alertStore.open("근저당권 여부를 선택해주세요");
    }
    return false;
  }

  if (isSaleFlagAndRemovableFlagY.value) {
    toggleReportChangeFailModal();
    return false;
  }

  const formData = new FormData();
  formData.append(
    "registrationApplication",
    form.value.registrationApplication
  );
  formData.append("salePriceModifiedFlag", form.value.salePriceModifiedFlag);
  formData.append("acquisitionShareType", form.value.acquisitionShareType);
  formData.append("acquisitionShareDetail", form.value.acquisitionShareDetail);
  formData.append("buyerAddressType", form.value.buyerAddressType);
  formData.append("memo", form.value.memo);
  formData.append("mortgageRemovableFlag", form.value.mortgageRemovableFlag);

  if (fileListObj.value !== null) {
    fileListObj.value.forEach((file) => {
      formData.append("requestReportFileList", file);
    });
  }

  tradeCaseRequestReport
    .post(tradeCaseId, formData)
    .then(() => {
      toggleSuccessModal();
    })
    .catch((e) => {
      alertStore.open(e.response.data.message);
    });
};

const toggleReportChangeHelpModal = () => {
  isReportChangeHelpModalShow.value = !isReportChangeHelpModalShow.value;
};

const toggleReportChangeFailModal = () => {
  isReportChangeFailModalShow.value = !isReportChangeFailModalShow.value;
};

const handlerChangeOpenModalEvent = (e) => {
  if (["Y"].includes(e.target.value)) {
    toggleReportChangeHelpModal();
  }
};
</script>

<style scoped lang="scss">
@import "~/assets/scss/report/form.scss";
.application-report-title {
  font-weight: $ft-bold;
}
</style>
