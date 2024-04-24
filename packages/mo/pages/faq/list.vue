<template>
  <NuxtLayout name="dialog-header" headerTitle="헬프센터">
    <div class="faq-tabs">
      <button class="faq-tab" :class="{active: tab === 'faq'}" @click="handlerClickTab('faq')">FAQ</button>
      <button class="faq-tab" :class="{active: tab === 'notice'}" @click="handlerClickTab('notice')">공지사항</button>
    </div>
    <div v-if="faqList.length > 0 && tab === 'faq'" class="faq-list">
      <NoticeListCard v-for="(faq, index) in faqList" :key="index" :notice="faq" />
      <Pagination :margin-top="64" :paging="paging" @click-page="fetchFaqList" />
    </div>
    <div v-if="noticeList.length > 0 && tab === 'notice'" class="faq-list">
      <NoticeListCard v-for="(notice, index) in noticeList" :key="index" :notice="notice" />
      <Pagination :margin-top="64" :paging="paging" @click-page="fetchNoticeList" />
    </div>
    <LoadingModal v-if="isLoading" />
  </NuxtLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import LoadingModal from '@priros/common/components/modal/LoadingModal.vue'
import NoticeListCard from '~/components/card/NoticeListCard'
import Pagination from '@priros/common/components/paging/Pagination'
import { faq } from '~/services/faq.js'
import { notice } from '~/services/notice.js'
definePageMeta({
  layout: false
})

const faqList = ref([])
const noticeList = ref([])
const paging = ref({})

const isLoading = ref(true)

const tab = ref('faq')

const handlerClickTab = (v) => {
  tab.value = v;
  if(tab.value === 'faq') fetchFaqList(1)
  else fetchNoticeList(1)
}

onMounted(() => {
  fetchFaqList(1)
})

const fetchFaqList = (page) => {
  isLoading.value = true
  faq.list(page).then(({data}) => {
    faqList.value = data.faqList
    paging.value = data.paging

    document.querySelectorAll('.notice-list-card').forEach(elm => {
      elm.classList.remove('open')
    })
  })
  .catch(e => {
    console.log(e)
  })
  .finally(() => {
    isLoading.value = false
  })
}

const fetchNoticeList = (page) => {
  isLoading.value = true
  notice.list(page).then(({data}) => {
    noticeList.value = data.noticeList
    paging.value = data.paging

    document.querySelectorAll('.notice-list-card').forEach(elm => {
      elm.classList.remove('open')
    })
  })
  .catch(e => {
    console.log(e)
  })
  .finally(() => {
    isLoading.value = false
  })
}
</script>

<style scoped lang="scss">
.faq-list {
  padding: 16px 16px 24px;
}
.faq-tabs {
  display: flex;
  .faq-tab {
    flex: 1;
    height: 42px;
    border: none;
    border-bottom: 4px solid #d9d9d9;
    color: #d9d9d9;
    font-weight: $ft-bold;
    font-size: 14px;
    background-color: #ffffff;
    &.active {
      border-color: #000000;
      color: #000000;
    }
  }
}
</style>