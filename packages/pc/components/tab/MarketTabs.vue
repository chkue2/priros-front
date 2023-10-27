<template>
  <div class="market-bottom-tabs">
    <p class="bottom-tab" :class="{active: tab === 'changed'}" @click="handlerClickTab('changed')">변경내역</p>
    <p class="bottom-tab" :class="{active: tab === 'memo'}" @click="handlerClickTab('memo')">메모</p>
    <p class="bottom-tab" :class="{active: tab === 'processed'}" @click="handlerClickTab('processed')">처리내역</p>
    <p class="bottom-tab" :class="{active: tab === 'files'}" @click="handlerClickTab('files')">첨부파일</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const tab = ref('changed')
const emits = defineEmits(['click-tab'])
const handlerClickTab = (v) => {
  tab.value = v
  emits('click-tab', v)
}
</script>
<style scoped lang="scss">
@import '~/assets/scss/market/write.scss';
</style>