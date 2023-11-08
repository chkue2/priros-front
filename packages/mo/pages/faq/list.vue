<template>
  <NuxtLayout name="dialog-header" headerTitle="헬프센터">
    <div v-if="faqList.length > 0" class="faq-list">
      <NoticeListCard v-for="(faq, index) in faqList" :key="index" :notice="faq" />
      <Pagination :margin-top="64" :paging="paging" @click-page="fetchFaqList" />
    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import NoticeListCard from '~/components/card/NoticeListCard'
import Pagination from '@priros/common/components/paging/Pagination'
import { faq } from '~/services/faq.js'
definePageMeta({
  layout: false
})

const faqList = ref([])
const paging = ref({})

onMounted(() => {
  fetchFaqList(1)
})

const fetchFaqList = (page) => {
  faq.list(page).then(({data}) => {
    faqList.value = data.value.faqList
    paging.value = data.value.paging
  })
  .catch(e => {
    console.log(e)
  })
}
</script>

<style scoped lang="scss">
.faq-list {
  padding: 16px 16px 24px;
}
</style>