<template>
  <div class="notice-card">
    <p class="notice-card-title">사건 수임방식 변경 안내 <img src="/img/icon/board-new.svg" aria-hidden></p>
    <p class="notice-card-date">2023.10.14</p>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
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