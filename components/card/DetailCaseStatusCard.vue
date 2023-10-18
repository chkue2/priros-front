<template>
  <div class="detail-case-status-card" :class="{active: statusConfig.state === '완료'}" @click="handlerClickStatusCard">
    <p class="detail-case-status-top">
      {{ topText }}
    </p>
    <div class="detail-case-status-bottom">
      <div class="detail-case-status-bottom-left">
        <i class="detail-case-status-check"></i>
        <p class="detail-case-status-title">{{ statusConfig.title }}</p>
      </div>
      <i class="detail-case-status-icon"></i>
    </div>
  </div>
</template>
<script setup>
import {computed} from 'vue'
import {useRouter} from 'vue-router'

const props = defineProps({
  statusConfig: Object,
  tradeCaseId: String
});

const topText = computed(() => {
  switch (props.statusConfig.state) {
    case '완료':
      return '보고를 완료했어요'
    default:
      return '클릭하여 진행하기'
  }
});

const router = useRouter()
const handlerClickStatusCard = () => {
  switch (props.statusConfig.title) {
    case '송금요청':
      router.push('/request/transfer')
      break
    case '담당자 보고':
      router.push(`/case/${props.tradeCaseId}/charge-report`);
      break;
    default:
      return
  }
}
</script>

<style scoped lang="scss">
.detail-case-status-card {
  padding: 11px 14px;
  background-color: #f6f7f9;
  border-radius: 7px;

  &.active {
    background-color: #f3f7ff;
    border: 2px solid #128dff;

    .detail-case-status-check {
      background-color: #128dff;
    }
  }

  .detail-case-status-top {
    margin-bottom: 4px;
    font-size: 12px;
    font-weight: $ft-medium;
    color: #808080;
  }

  .detail-case-status-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .detail-case-status-bottom-left {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .detail-case-status-check {
    display: block;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: url(/img/icon/check-white.svg) no-repeat center/cover;
    background-color: #dedede;
  }

  .detail-case-status-title {
    font-size: 14px;
    font-weight: $ft-bold;
    line-height: 20px;
  }

  .detail-case-status-icon {
    display: block;
    width: 9px;
    height: 16px;
    background: url(/img/icon/expand-right-black-bold.svg) no-repeat center/cover;
  }
}
</style>