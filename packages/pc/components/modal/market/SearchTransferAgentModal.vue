<template>
  <CommonHeaderModal modal-id="searchTransferAgentModal" modal-title="이전 대리인 검색" width="420px">
    <div class="search-container">
      <div class="search-input">
        <input type="text" placeholder="상호, 주소 또는 대표자명을 입력하세요">
        <img src="/img/icon/search-gray.svg">
      </div>
      <div class="search-list">
        <div v-for="i in 4" :key="i" class="search-item">
          <div class="search-item-column">
            <div class="search-item-title">상호</div>
            <div class="search-item-contents">로앤텍</div>
          </div>
          <div class="search-item-column">
            <div class="search-item-title">이름</div>
            <div class="search-item-contents">정을영_TL법무사 (ID:jey6237)</div>
          </div>
          <div class="search-item-column">
            <div class="search-item-title">연락처</div>
            <div class="search-item-contents">043-2444-2513 (010-7369-9637)</div>
          </div>
          <div class="search-item-column">
            <div class="search-item-title">주소</div>
            <div class="search-item-contents">서울특별시 강남구 삼성로95길 24 114</div>
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  </CommonHeaderModal>
</template>

<script setup>
import CommonHeaderModal from '~/components/modal/CommonHeaderModal.vue'
import Pagination from '@priros/common/components/paging/Pagination.vue'
</script>

<style scoped lang="scss">
@import '~/assets/scss/common/search-modal.scss';
</style>