<template>
  <div class="detail-case-common-table">
    <div class="detail-case-common-table-header header-8">
      <div class="detail-case-common-table-small">등록일</div>
      <div class="detail-case-common-table-big">문서명</div>
      <div class="detail-case-common-table-small">첨부파일</div>
      <div class="detail-case-common-table-thin">삭제</div>
    </div>
    <div
      v-if="detailCaseStore.fetchedFilesList.length === 0"
      class="detail-case-common-table-contents"
    >
      <div class="detail-case-common-table-empty">첨부된 파일이 없습니다</div>
    </div>
    <div v-if="detailCaseStore.fetchedFilesList.length > 0">
      <div
        v-for="(f, index) in detailCaseStore.fetchedFilesList"
        :key="index"
        class="detail-case-common-table-contents contents-8"
      >
        <div
          class="detail-case-common-table-small"
          v-html="changeDateFormat(f.created)"
        ></div>
        <div
          class="detail-case-common-table-big line-break"
          @click="handlerClickFileView(f.documentId)"
        >
          {{ f.fileName }}
        </div>
        <div class="detail-case-common-table-small">
          <img
            @click="handlerClickFileDonwload(f.documentId, f.fileName)"
            src="/img/icon/download-small-black.svg"
            alt
            class="table-small-icon"
          />
        </div>
        <div class="detail-case-common-table-thin">
          <img
            @click="hanlderClickFileDelete(f.documentId)"
            src="/img/icon/delete-gray.svg"
            alt
            class="table-small-icon"
          />
        </div>
      </div>
    </div>
  </div>
  <Pagination
    :paging="detailCaseStore.fetchedPaging"
    :margin-top="50"
    @click-page="handlerClickPage"
  />
  <CustomConfirmModal
    v-if="alertStore.isConfirmOpen"
    @click-button="removeFile"
  />
</template>
<script setup>
import { useAlertStore } from "~/store/alert.js";
import { useDetailCaseStore } from "@priros/common/store/case/detail.js";

import { fileDownload } from "@priros/common/assets/js/utils.js";

import Pagination from "@priros/common/components/paging/Pagination.vue";
import CustomConfirmModal from "~/components/modal/CustomConfirmModal.vue";

const props = defineProps({ tradeCaseId: String });
const emits = defineEmits(["file-view"]);
const detailCaseStore = useDetailCaseStore();
const alertStore = useAlertStore();

const selectDocumentId = ref("");

const changeDateFormat = (date) => {
  return date?.replace("T", "<br>");
};

const handlerClickPage = (page) => {
  detailCaseStore.fetchDocument(props.tradeCaseId, page);
};

const handlerClickFileView = (documentId) => {
  detailCaseStore
    .fetchDocumentDetail(props.tradeCaseId, documentId)
    .then(({ data }) => {
      emits("file-view", {
        documentFile: data.documentFile,
        fileName: data.fileName,
        documentId,
        fileExt: data.fileExt,
      });
    })
    .catch((e) => {
      alertStore.open(e.response.data.message);
    });
};

const handlerClickFileDonwload = (documentId, fileName) => {
  detailCaseStore
    .fetchDocumentDownload(props.tradeCaseId, documentId)
    .then(({ data }) => {
      fileDownload(data, fileName.split(".")[0], fileName.split(".")[1]);
    })
    .catch((e) => {
      alertStore.open(e.response.data.message);
    });
};

const hanlderClickFileDelete = (documentId) => {
  selectDocumentId.value = documentId;
  alertStore.confirmOpen("파일을 삭제하시겠어요?");
};

const removeFile = () => {
  alertStore.confirmClose();
  detailCaseStore
    .requestDocumentDelete(props.tradeCaseId, selectDocumentId.value)
    .then(() => {
      detailCaseStore.fetchDocument(props.tradeCaseId, 1);
      alertStore.open("파일이 삭제 되었습니다.");
    })
    .catch((e) => {
      alertStore.open(e.response.data.message);
    });
};
</script>
<style scoped lang="scss">
@import "@priros/common/assets/scss/detail-case/table.scss";
</style>
