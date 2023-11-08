<template>
  <div class="notice-list-card" :class="{open: isOpen}" @click="handlerToggleNoticeCardOpen">
    <div class="notice-list-card-top">
      <div class="notice-list-card-left">
        <p class="notice-list-card-title">{{ title }} <img v-if="isNew" src="/img/icon/board-new.svg" aria-hidden></p>
        <p class="notice-list-card-date">{{ created }}</p>
      </div>
      <img src="/img/icon/expand-right-gray.svg" aria-hidden class="notice-list-card-expand">
    </div>
    <div class="notice-list-card-contents" v-html="notice.content">
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import dayjs from '@priros/common/node_modules/dayjs'

const props = defineProps({
  notice: {
    type: Object,
    default: () => {}
  }
})

const title = computed(() => {
  return !props.notice.title ? '' : props.notice.title.replace(/&quot;/gi, '"')
})
const created = computed(() => {
  return !props.notice.created ? '' : dayjs(props.notice.created).format('YYYY-MM-DD')
})
const isNew = computed(() => {
  return !props.notice.created ? false : dayjs(props.notice.created).diff(dayjs(), 'day') > -7
})

let isOpen = ref(false)
const handlerToggleNoticeCardOpen = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped lang="scss">
.notice-list-card {
  border-bottom: 1px solid #eaeaea;
  &.open {
    .notice-list-card-top {
      background-color: #f6f6f6;
    }
    .notice-list-card-contents {
      padding: 30px 8px;
      max-height: 100vh;
    }
    .notice-list-card-expand {
      display: none;
    }
  }
  .notice-list-card-top {
    padding: 15px 7px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    .notice-list-card-title {
      display: flex;
      gap: 4px;
      align-items: center;
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 3px;
      img {
        width: 14px;
        height: 14px;
      }
    }
    .notice-list-card-date {
      font-size: 12px;
      font-weight: $ft-medium;
      color: #c0c0c0;
    }
  }
  .notice-list-card-contents {
    font-size: 12px;
    font-weight: $ft-medium;
    line-height: 17px;
    padding: 0 8px;
    max-height: 0;
    overflow: hidden;
    transition: all .15s ease-in-out;
    &::v-deep(p, span){
      font-size: 12px;
      font-weight: $ft-medium;
      line-height: 17px;
    }
    &::v-deep(img){
      max-width: 100%;
      height: auto;
    }
  }
}
</style>