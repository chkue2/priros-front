<template>
  <div class="transfer-account-text-card">
    <div class="transfer-account-title-container">
      <p class="transfer-account-title">계좌 1) 에서 요청한 이체금액</p>
      <p class="transfer-account-amount">500,000,000 원</p>
    </div>
    <div class="transfer-account-info-container">
      <p class="transfer-account-info-title">계좌정보</p>
      <p class="transfer-account-info-content">경남은행 1234121251234 김프리</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.transfer-account-text-card + .transfer-account-text-card {
  margin-top: 38px;
}
.transfer-account-title-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-top: 1px solid #7ef422;
  border-bottom: 1px solid #dcdcdc;
  padding: 10px 0;
  .transfer-account-title {
    font-size: 12px;
    font-weight: $ft-semibold;
    line-height: 17px;
  }
  .transfer-account-amount {
    font-size: 14px;
    font-weight: $ft-medium;
    line-height: 20px;
    text-align: right;
  }
}
.transfer-account-info-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 16px;
  .transfer-account-info-title {
    font-size: 12px;
    line-height: 17px;
  }
  .transfer-account-info-content {
    font-size: 14px;
    font-weight: $ft-medium;
    line-height: 20px;
    text-align: right;
  }
}
</style>