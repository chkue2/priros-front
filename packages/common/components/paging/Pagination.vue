
import { Style } from '#build/components';
<template>
  <div id="pagination" class="pagination">
    <span class="page-prev"></span>
    <span class="active">1</span>
    <span>2</span>
    <span>3</span>
    <span>4</span>
    <span>5</span>
    <span class="page-next active"></span>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
const props = defineProps({
  marginTop: {
    type: [Number, String],
    default: '0px'
  }
})

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
        color: #7949FF;
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