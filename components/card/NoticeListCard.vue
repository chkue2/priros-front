<template>
  <div class="notice-list-card" :class="{open: isOpen}" @click="handlerToggleNoticeCardOpen">
    <div class="notice-list-card-top">
      <div class="notice-list-card-left">
        <p class="notice-list-card-title">사건 수임방식 변경 관련 안내 <img src="/img/icon/board-new.svg" aria-hidden></p>
        <p class="notice-list-card-date">2023.04.14</p>
      </div>
      <img src="/img/icon/expand-right-gray.svg" aria-hidden class="notice-list-card-expand">
    </div>
    <div class="notice-list-card-contents">
      안녕하세요.<br>등기마켓 프리로스 입니다.<br><br>기존 간편결제와 별도로<br>법인결제(일반결제) 기능이 추가되었습니다.<br>법인결제(일반결제)는 카드사마다 결제방법이 달라서<br>결제에 대한 문의사항은 나이스페이쪽으로 문의바랍니다.<br>(결제창 하단의 버튼 클릭하여 문의하시면 됩니다.)<br><br>프리로스에서 수임시 일반결제를 사용하는 방법은 프리로스 메뉴얼을 참고 바랍니다.
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
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
    transition: all .3s ease-in-out;
  }
}
</style>