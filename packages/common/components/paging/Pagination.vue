
import { Style } from '#build/components';
<template>
  <div id="pagination" class="pagination">
    <span class="page-prev" :class="{active: isPrevEnable}" @click="handlerClickPrevPage"></span>
    <span v-for="i in pages" :key="i" :class="{active: paging.pageNo === i}" @click="handlerClickPage(i)">{{ i }}</span>
    <span class="page-next" :class="{active: isNextEnable}" @click="handlerClickNextPage"></span>
  </div>
</template>
<script setup>
import { onMounted, computed } from 'vue'
const props = defineProps({
  marginTop: {
    type: [Number, String],
    default: '0px'
  },
  paging: {
    type: Object,
    default: () => {
      return {
        startPage: 1,
        endPage: 1,
        pageNo: 1,
        totalPage: 1,
        prevPageGroup: 1,
        nextPageGroup: 1,
      }
    }
  }
})
const emits = defineEmits(['click-page'])

const pages = computed(() => {
  const res = []
  for(let i = props.paging.startPage; i <= props.paging.endPage; i++) {
    res.push(i)
  }
  return res
})
const isPrevEnable = computed(() => {
  return props.paging.pageNo > 1
})
const isNextEnable = computed(() => {
  return props.paging.totalPage !== props.paging.pageNo
})

const handlerClickPrevPage = () => {
  if(!isPrevEnable.value) return false
  handlerClickPage(props.paging.prevPageGroup)
}
const handlerClickNextPage = () => {
  if(!isNextEnable.value) return false
  handlerClickPage(props.paging.nextPageGroup)
}
const handlerClickPage = (page) => {
  emits('click-page', page)
}

onMounted(() => {
  document.querySelector('#pagination').style.marginTop = typeof props.marginTop === 'number' ? `${props.marginTop}px` : props.marginTop
})
</script>

<style scoped lang="scss">
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    & > span {
      display: flex;
      width: 40px;
      height: 40px;
      font-weight: $ft-semibold;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &.active {
        color: #3182f7;
      }
    }
    .page-prev {
      background: url(/img/icon/expand-left-black-24.svg) no-repeat center/24px;
      opacity: .3;
      &.active {
        opacity: 1;
      }
    }
    .page-next {
      background: url(/img/icon/expand-right-black-24.svg) no-repeat center/24px;
      opacity: .3;
      &.active {
        opacity: 1;
      }
    }
  }
</style>