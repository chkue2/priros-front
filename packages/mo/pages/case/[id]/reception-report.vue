<template>
  <NuxtLayout name="dialog-header" headerTitle="접수보고">
    <div class="dialog-wrapper">
      <div class="container">
        <div class="inner-body">
          <div class="forms">
            <div class="form-group">
              <div class="label">
                <label for="" class="form-label">접수일</label>
              </div>
              <div class="form-input">
                <input v-model="receiveDate" type="date" readonly />
              </div>
            </div>
            <div class="form-group">
              <div class="label">
                <label for="" class="form-label">접수번호</label>
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

import CommonBottomButton from "@priros/common/components/button/CommonBottomButton.vue";
import CommonAlertModal from "@priros/common/components/modal/CommonAlertModal.vue";

import { onlyNumber } from "@priros/common/assets/js/utils.js";
import { tradeCaseReceptionReport } from "~/services/tradeCaseReceptionReport.js";

definePageMeta({
  layout: false,
});

const tradeCaseId = useRoute().params.id;

const receiveNo = ref("");
const receiveDate = ref("");
const receiveBuyer = ref("");

const router = useRouter();

onMounted(() => {
  tradeCaseReceptionReport
    .get(tradeCaseId)
    .then(({ data }) => {
      if (data.receiveDateTime !== null) {
        receiveDate.value = data.receiveDateTime.split("T")[0];
      }
      receiveBuyer.value = data.buyer;
      receiveNo.value = data.receiveNo;
    })
    .catch((e) => {
      alert(e.response.data.message.replace(/<br>/gi, "\n"));
      router.back();
    });
});

watch(
  () => receiveNo.value,
  () => {
    receiveNo.value = onlyNumber(receiveNo.value);
  }
);

const isSuccessModalShow = ref(false);
const toggleSuccessModal = () => {
  isSuccessModalShow.value = !isSuccessModalShow.value;
};

const handleBtnSendClick = () => {
  if (receiveNo.value === "") {
    alert("접수번호를 입력해주세요.");
    return false;
  }

  tradeCaseReceptionReport
    .post(tradeCaseId, {
      receiveDate: receiveDate.value,
      receiveNo: receiveNo.value,
    })
    .then(() => {
      toggleSuccessModal();
    })
    .catch((e) => {
      alert(e.response.data.message.replace(/<br>/gi, "\n"));
    });
};
</script>

<style scoped lang="scss">
@import "@priros/common/assets/scss/views/dialog";
</style>
