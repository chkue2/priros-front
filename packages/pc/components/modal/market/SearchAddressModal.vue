<template>
  <CommonHeaderModal modal-id="searchAddressModal" modal-title="주소검색" width="420px">
    <div class="search-container">
      <div class="search-input">
        <input type="text" placeholder="주소를 검색해주세요">
        <img src="/img/icon/search-gray.svg">
      </div>
      <div class="search-list">
        <div v-for="i in 4" :key="i" class="search-item">
          <div class="search-item-column">
            <div class="search-item-title">도로명</div>
            <div class="search-item-contents">인천광역시 부평구 부평공원로 51-1 (부평동,부평파크빌)</div>
          </div>
          <div class="search-item-column">
            <div class="search-item-title">지번</div>
            <div class="search-item-contents">인천광역시 부평구 부평동 284-213  부평파크빌 주소는 무조건 길면 두줄까지다</div>
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
<style lang="scss" scoped>
@import '~/assets/scss/common/search-modal.scss';
</style>