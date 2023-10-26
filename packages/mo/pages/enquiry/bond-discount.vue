<template>
  <NuxtLayout name="dialog-header" headerTitle="채권할인율 조회">
    <div class="dialog-wrapper">
      <p class="top-text">
        신한은행 국민주택 채권을 기준으로, 최근 7일의 채권할인율을 확인 할 수 있습니다.
      </p>
      <div class="discount-table">
        <table>
          <thead>
            <tr><td>기준일</td><td>채권할인율</td></tr>
          </thead>
          <tbody>
            <tr><td>2023-10-20</td><td>15.5708%</td></tr>
            <tr><td>2023-10-19</td><td>15.3484%</td></tr>
            <tr><td>2023-10-18</td><td>15.146%</td></tr>
            <tr><td>2023-10-17</td><td>15.0433%</td></tr>
            <tr><td>2023-10-16</td><td>14.9207%</td></tr>
            <tr><td>2023-10-13</td><td>14.7421%</td></tr>
            <tr><td>2023-10-12</td><td>14.8388%</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: false
});
</script>

<style scoped lang="scss">
@import '@priros/common/assets/scss/views/dialog';
.top-text {
  font-size: 14px;
  font-weight: $ft-medium;
  text-align: center;
  padding: 36px 30px 0;
}
.discount-table {
  padding: 0 16px;
  margin-top: 36px;
  & > table {
    width: 100%;
    td {
      height: 40px;
      text-align: center;
      vertical-align: middle;
      border-top: 1px solid #ebebeb;
      border-bottom: 1px solid #ebebeb;
      &:nth-child(2) {
        border-left: 1px solid #ebebeb;;
      }
    }
    thead {
      td {
        background-color: #f9f9f9;
        font-weight: $ft-semibold;
      }
    }
  }
}
</style>