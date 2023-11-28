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
            <tr v-for="(discount, index) in discountList" :key="index"><td>{{ discount.issueDate }}</td><td>{{ discount.discountRate }}%</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { enquiry } from '~/services/enquiry.js'

definePageMeta({
  layout: false
});

const discountList = ref([])
const fetchBondDiscount = () => {
  enquiry.bond()
    .then(({data}) => {
      discountList.value = data.list
    })
}
onMounted(() => {
  fetchBondDiscount()
})
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