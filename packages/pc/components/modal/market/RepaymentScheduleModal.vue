<template>
  <CommonHeaderModal modal-id="repaymentScheduleModal" modal-title="일정 3일" width="420px">
    <div class="repayment-schedule">
      <p class="schedule-date"><span>2023-10-16</span></p>
      <div class="schedule-grid schedule-header">
        <div class="schedule-left">소재지</div>
        <div class="schedule-right">상환여부</div>
      </div>
      <div class="schedule-grid schedule-body">
        <p class="schedule-empty">검색된 데이터가 없습니다.</p>
      </div>
      <p class="schedule-date active"><span>2023-10-17</span><span>총 10건</span></p>
      <div class="schedule-grid schedule-header active">
        <div class="schedule-left">소재지</div>
        <div class="schedule-right">상환여부</div>
      </div>
      <div class="schedule-grid schedule-body">
        <div class="schedule-left">경기도 안양시 동안구 호계동</div>
        <div class="schedule-right">Y</div>
        <div class="schedule-left">경기도 안양시 동안구 호계동</div>
        <div class="schedule-right">Y</div>
        <div class="schedule-left">경기도 안양시 동안구 호계동</div>
        <div class="schedule-right">Y</div>
        <div class="schedule-left">경기도 안양시 동안구 호계동</div>
        <div class="schedule-right">Y</div>
        <div class="schedule-left">경기도 안양시 동안구 호계동</div>
        <div class="schedule-right">Y</div>
        <div class="schedule-left">경기도 안양시 동안구 호계동</div>
        <div class="schedule-right">Y</div>
        <div class="schedule-left">경기도 안양시 동안구 호계동</div>
        <div class="schedule-right">Y</div>
        <div class="schedule-left">경기도 안양시 동안구 호계동</div>
        <div class="schedule-right">Y</div>
      </div>
      <p class="schedule-date"><span>2023-10-18</span></p>
      <div class="schedule-grid schedule-header">
        <div class="schedule-left">소재지</div>
        <div class="schedule-right">상환여부</div>
      </div>
      <div class="schedule-grid schedule-body">
        <p class="schedule-empty">검색된 데이터가 없습니다.</p>
      </div>
    </div>
  </CommonHeaderModal>
</template>

<script setup>
import CommonHeaderModal from '~/components/modal/CommonHeaderModal.vue'
</script>

<style scoped lang="scss">
.repayment-schedule {
  padding: 12px 26px;
}
.schedule-date {
  margin-bottom: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > span {
    font-weight: $ft-semibold;
  }
  &.active > span {
    color: #1c4aa3;
  }
}
.schedule-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  .schedule-left {
    grid-column: 3 span;
  }
  .schedule-right {
    grid-column: 1 span;
  }
  .schedule-empty {
    grid-column: 4 span;
    padding: 20px 12px;
    font-weight: $ft-medium;
    color: #bebebe;
  }
}
.schedule-header {
  & > div {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #e6e6e6;
    background-color: #f9f9f9;
    font-weight: $ft-semibold;
    & + div {
      border-left: none;
    }
  }
  &.active {
    & > div {
      background-color: #1c4aa3;
      color: #ffffff;
    }
  }
}
.schedule-body {
  border: 1px solid #e6e6e6;
  border-top: none;
  height: 120px;
  overflow-x: hidden;
  overflow-y: auto;
  & + .schedule-date {
    margin-top: 35px;
  }
  & > div {
    font-weight: $ft-medium;
    padding: 5px 10px;
  }
  .schedule-right {
    text-align: center;
  }
}
</style>