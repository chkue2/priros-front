<template>
  <div class="notice-card">
    <p class="notice-card-title">{{board.title}} <img src="/img/icon/board-new.svg" aria-hidden></p>
    <p class="notice-card-date">{{ board.created }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  board: {
    type: Object,
    default: () => {}
  }
})
</script>

<style lang="scss" scoped>
.notice-card {
  display: flex;
  flex-direction: column;
  .notice-card-title {
    font-size: 14px;
    display: flex;
    align-items: center;
    img {
      width: 14px;
      height: 14px;
      margin-left: 4px;
    }
  }
  .notice-card-date {
    margin-top: 3px;
    font-size: 12px;
    font-weight: $ft-medium;
    color: #c0c0c0;
  }
}
</style>