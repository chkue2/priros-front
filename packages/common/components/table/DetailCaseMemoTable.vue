<template>
  <div class="detail-case-common-table">
    <div class="apply-memo">
      <textarea v-model="memoText" class="apply-memo-textarea" placeholder="메모를 등록하세요 (한글 최대 50자 이내)" maxlength="50"></textarea>
      <button class="apply-memo-button" @click="handlerClickSendMemo">
        <img src="/img/icon/apply-white.svg">
        등록
      </button>
    </div>
    <div class="detail-case-common-table-header">
      <div class="detail-case-common-table-small">수신일</div>
      <div class="detail-case-common-table-big">내용</div>
      <div class="detail-case-common-table-small">발신자</div>
    </div>
    <div v-if="detailCaseStore.fetchedMemoList.length === 0" class="detail-case-common-table-contents">
      <div class="detail-case-common-table-empty">등록된 메모가 없습니다</div>
    </div>
    <div v-if="detailCaseStore.fetchedMemoList.length > 0">
      <div v-for="(m, index) in detailCaseStore.fetchedMemoList" :key="index" class="detail-case-common-table-contents">
        <div class="detail-case-common-table-small">{{ changeDateFormat(m.created) }}</div>
        <div class="detail-case-common-table-big">{{ m.content }}</div>
        <div class="detail-case-common-table-small">{{ m.registerName }}</div>
      </div>
    </div>
    <Pagination :margin-top="50" />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useDetailCaseStore } from '@priros/common/store/case/detail.js'

import Pagination from '@priros/common/components/paging/Pagination.vue'

const props = defineProps({tradeCaseId: String})
const detailCaseStore = useDetailCaseStore()

const changeDateFormat = (date) => {
  return date?.split('T')[0]
}

const memoText = ref('')
const handlerClickSendMemo = () => {
  detailCaseStore.requestMemo(props.tradeCaseId, memoText.value)
    .then(() => {
      memoText.value = ''
      alert('메모가 등록되었습니다.')
      detailCaseStore.fetchMemo(props.tradeCaseId, 1)
    })
    .catch(e => {
      alert(e.response.data.message)
    })
}
</script>
<style scoped lang="scss">
@import '@priros/common/assets/scss/detail-case/table.scss';
.apply-memo {
  display: flex;
  margin-bottom: 15px;
  .apply-memo-textarea {
    flex: 1;
    resize: none;
    border: 1px solid #d9d9d9;
    padding: 8px;
  }
  .apply-memo-button {
    width: 70px;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
    background-color: #000000;
    color: #ffffff;
    font-size: 12px;
    border: none;
  }
}
</style>