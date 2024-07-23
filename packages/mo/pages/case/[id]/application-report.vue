<template>
  <NuxtLayout name="dialog-header" headerTitle="신청정보 보고">
    <div class="dialog-wrapper">
      <div class="container">
        <div class="inner-header">
          <span class="badge badge-primary-gradient">신청정보보고 전 확인</span>
          <div class="txt-help">
            매도인의 주소경정등기 누락은
            <br />등기취하 및 재접수가 필요한 중요사항입니다.
          </div>
        </div>
        <div class="inner-body">
          <div class="forms">
            <div class="form-group">
              <div class="label">
                <label for="" class="form-label">등기신청서 작성정보</label>
              </div>
              <div class="form-input">
                <textarea
                  v-model="form['registrationApplication']"
                  placeholder="등기신청서 작성 ID 및 작성번호를 입력하세요"
                ></textarea>
              </div>
            </div>
            <div class="form-group">
              <div class="label">
                <label for="" class="form-label">매수인별 취득지분</label>
                <div class="label-radio">
                  <label class="form-label">
                    <input
                      v-model="form['acquisitionShareType']"
                      name="acquisitionShareType"
                      type="radio"
                      value="S"
                    /><span>단독명의</span>
                  </label>
                  <label class="form-label">
                    <input
                      v-model="form['acquisitionShareType']"
                      name="acquisitionShareType"
                      type="radio"
                      value="M"
                    /><span>공동명의</span>
                  </label>
                </div>
              </div>
              <div
                v-if="form['acquisitionShareType'] === 'M'"
                class="form-input"
              >
                <textarea
                  v-model="form['acquisitionShareDetail']"
                  placeholder="매수인별로 이름과 취득지분을 입력하세요"
                ></textarea>
              </div>
            </div>
            <div class="form-group">
              <div class="label">
                <label for="" class="form-label">매수인 주소변동</label>
                <div class="label-radio">
                  <label class="form-label">
                    <input
                      v-model="form['buyerAddressType']"
                      name="buyerAddressType"
                      type="radio"
                      value="E"
                    /><span>동일</span>
                  </label>
                  <label class="form-label">
                    <input
                      v-model="form['buyerAddressType']"
                      name="buyerAddressType"
                      type="radio"
                      value="C"
                    /><span>변동발생</span>
                  </label>
                </div>
              </div>
              <div v-if="form['buyerAddressType'] === 'C'" class="form-input">
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
            </div>
            <div class="form-group">
              <div class="label">
                <label for="" class="form-label">기타사항</label>
              </div>
              <div class="form-input">
                <textarea
                  v-model="form['memo']"
                  placeholder="설정대리인에게 전달할 내용을 입력하세요"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div>
          <CommonBottomButton
            id="btn-send"
            text="신청정보보고"
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
      text="신청정보 보고가 완료되었습니다."
      @handler-click-button="toggleSuccessModal"
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
});
const fileList = ref(null);
const fileListObj = ref(null);

onMounted(() => {
  tradeCaseRequestReport
    .get(tradeCaseId)
    .then(({ data }) => {
      if (data) {
        form.value = data;
      }
    })
    .catch((e) => {
      alertStore.open(e.response.data.message.replace(/<br>/gi, "\n"));
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
    "registrationApplication",
    "acquisitionShareType",
    "buyerAddressType",
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
    if (isEmpty(form.value["registrationApplication"])) {
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
    }
    return false;
  }

  const formData = new FormData();
  formData.append(
    "registrationApplication",
    form.value.registrationApplication
  );
  formData.append("acquisitionShareType", form.value.acquisitionShareType);
  formData.append("acquisitionShareDetail", form.value.acquisitionShareDetail);
  formData.append("buyerAddressType", form.value.buyerAddressType);
  formData.append("memo", form.value.memo);

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
      alertStore.open(e.response.data.message.replace(/<br>/gi, "\n"));
    });
};
</script>

<style scoped lang="scss">
@import "@priros/common/assets/scss/views/dialog";
</style>
