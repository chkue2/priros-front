<template>
  <NuxtLayout name="dialog-header" headerTitle="접수보고">
    <div class="dialog-wrapper">
      <div class="container">
        <div class="inner-body">
          <div class="forms">
            <div class="form-group">
              <div class="label">
                <label class="form-label">접수일<b>*</b></label>
              </div>
              <div class="form-input">
                <input v-model="receiveDate" type="date" readonly />
              </div>
            </div>
            <div class="form-group">
              <div class="label">
                <label class="form-label">접수번호<b>*</b></label>
                <span class="form-warning"
                  >해당 명의인의 접수번호를 입력해주세요</span
                >
              </div>
              <div class="form-input">
                <input v-model="receiveBuyer" type="text" readonly />
                <input
                  v-model="receiveNo"
                  type="tel"
                  placeholder="접수번호"
                  maxlength="20"
                />
              </div>
            </div>
            <div v-if="allowFileUpload === 'Y'" class="form-group">
              <div class="label">
                <label class="form-label">파일첨부</label>
              </div>
              <div class="form-input">
                <input
                  ref="fileList"
                  type="file"
                  accept=".gif, .jpg, .jpeg, .png, .pdf, .bmp, .tif, .tiff"
                  @change="handlerChangeFileList"
                />
                <p class="input-file mt" @click="handlerClickFileList">
                  {{ filePreviewName }}
                  <img src="/img/icon/file-gray.png" alt="" />
                </p>
              </div>
              <p class="form-help-text">
                매매계약서상 변경내용이 있을 경우 매매계약서를 첨부해주세요.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div>
          <CommonBottomButton
            id="btn-send"
            text="접수보고"
            backgroundColor="#000000"
            height="60px"
            width="100%"
            color="#fff"
            :font-weight="700"
            @handler-click-button="handleBtnSendClick"
          />
        </div>
      </div>
    </div>
    <CommonAlertModal
      v-if="isSuccessModalShow"
      text="접수 보고가 완료되었습니다."
      @handler-click-button="toggleSuccessModal"
    />
  </NuxtLayout>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import dayjs from "@priros/common/node_modules/dayjs";

import CommonBottomButton from "@priros/common/components/button/CommonBottomButton.vue";
import CommonAlertModal from "@priros/common/components/modal/CommonAlertModal.vue";

import { onlyNumber } from "@priros/common/assets/js/utils.js";
import { tradeCaseReceptionReport } from "~/services/tradeCaseReceptionReport.js";
import { useAlertStore } from "~/store/alert.js";

definePageMeta({
  layout: false,
});

const router = useRouter();
const alertStore = useAlertStore();

const tradeCaseId = useRoute().params.id;

const receiveNo = ref("");
const receiveDate = ref("");
const receiveBuyer = ref("");
const receiveFiles = ref(null);
const fileList = ref(null);
const changedContractFileList = ref([]);
const allowFileUpload = ref("N");

const isSuccessModalShow = ref(false);

onMounted(() => {
  tradeCaseReceptionReport
    .get(tradeCaseId)
    .then(({ data }) => {
      if (data.receiveDateTime !== null) {
        receiveDate.value = data.receiveDateTime.split("T")[0];
      }
      receiveBuyer.value = data.buyer;
      receiveNo.value = data.receiveNo;
      changedContractFileList.value = data.changedContractFileList;
      allowFileUpload.value = data.allowFileUpload;
    })
    .catch((e) => {
      alertStore.open(e.response.data.message);
      router.back();
    });
});

watch(
  () => receiveNo.value,
  () => {
    receiveNo.value = onlyNumber(receiveNo.value);
  }
);
const filePreviewName = computed(() => {
  return receiveFiles.value !== null
    ? receiveFiles.value[0].name
    : changedContractFileList.value.length === 1
      ? `[${changedContractFileList.value[0].docName}] ${dayjs(changedContractFileList.value[0].created).format("YYYY-MM-DD")}`
      : "파일첨부하기";
});

const handlerClickFileList = () => {
  fileList.value.click();
};
const handlerChangeFileList = (e) => {
  if (e.target.files.length === 0) return false;
  const files = Array.from(e.target.files);
  if (files.length > 1) {
    alertStore.open("파일은 한번에 최대 5개까지만 첨부 가능합니다.");
    return false;
  }
  for (let file of files) {
    if (file.size > 10 * 1024 * 1024) {
      alertStore.open("10MB 이상의 파일은 첨부할 수 없습니다.");
      return false;
    }
  }
  receiveFiles.value = files;
};

const toggleSuccessModal = () => {
  isSuccessModalShow.value = !isSuccessModalShow.value;
};

const handleBtnSendClick = () => {
  if (receiveNo.value === "") {
    alertStore.open("접수번호를 입력해주세요.");
    return false;
  }

  const formData = new FormData();
  // formData.append("receiveDate", receiveDate.value);
  // formData.append("receiveNo", receiveNo.value);

  if (receiveFiles.value !== null && receiveFiles.value.length > 0) {
    receiveFiles.value.forEach((file) => {
      formData.append("changedContractFileList", file);
    });
  }

  tradeCaseReceptionReport
    .post(
      tradeCaseId,
      { receiveDate: receiveDate.value, receiveNo: receiveNo.value },
      formData
    )
    .then(() => {
      toggleSuccessModal();
    })
    .catch((e) => {
      alertStore.open(e.response.data.message);
    });
};
</script>

<style scoped lang="scss">
@import "@priros/common/assets/scss/views/dialog";
.form-label {
  b {
    color: #dc6024;
  }
}
.form-help-text {
  font-size: 11px;
  color: #3c323f;
  margin-top: 4px;
}
</style>
