<template>
  <div class="my-case-card" @click="handlerClickCard">
    <div class="my-case-card-title">
      <p class="my-case-card-name">{{ caseConfig.buyer }}</p>
      <div class="my-case-card-dates">
        <div class="my-case-card-date">
          {{ date }}
        </div>
        <div v-if="!!time" class="my-case-card-time">
          {{ time }}
        </div>
      </div>
    </div>
    <p class="my-case-card-address">
      {{ caseConfig.estateAddr }} {{ caseConfig.estateRestAddr }}
    </p>
    <div class="my-case-card-tags">
      <div class="my-case-card-bank">
        <img :src="bankIcon" aria-hidden alt="" />
        <p>{{ bankTitle }}</p>
      </div>
      <div v-if="false" class="my-case-card-bank">
        <img src="/img/icon/soda.png" aria-hidden alt="" />
        <p>등기소다</p>
      </div>
      <span
        class="my-case-card-tag"
        v-for="(tag, index) in tags"
        :key="index"
        >{{ tag }}</span
      >
    </div>
    <div
      class="my-case-card-status"
      :class="{ 'align-left': props.caseConfig.venderId === 'SODA' }"
    >
      <span
        v-if="supplementText !== '' && props.caseConfig.venderId !== 'SODA'"
        class="my-case-card-supplement"
        :class="{ wait: caseConfig.registSupplement === 'R' }"
        >{{ supplementText }}</span
      >
      <span
        v-if="props.caseConfig.venderId !== 'SODA'"
        class="my-case-card-state"
        :class="{ active: caseConfig.estimateFlag === 'Y' }"
        >견적</span
      >
      <span
        class="my-case-card-state"
        :class="{ active: caseConfig.acceptChargeFlag === 'Y' }"
        >담당자</span
      >
      <span
        class="my-case-card-state"
        :class="{ active: caseConfig.issueTimeFlag === 'Y' }"
        >일정</span
      >
      <span
        v-if="props.caseConfig.venderId !== 'SODA'"
        class="my-case-card-state"
        :class="[
          { active: caseConfig.remitFlag === 'Y' },
          { fail: caseConfig.remitState === 'N' },
        ]"
        >{{ transferText }}</span
      >
      <span
        v-if="props.caseConfig.venderId !== 'SODA'"
        class="my-case-card-state"
        :class="{ active: caseConfig.requestReportFlag === 'Y' }"
        >정보</span
      >
      <span
        v-if="
          caseConfig.repayFlag === 'Y' && props.caseConfig.venderId !== 'SODA'
        "
        class="my-case-card-state"
        :class="{ active: caseConfig.repayReportFlag === 'Y' }"
        >상환</span
      >
      <span
        class="my-case-card-state"
        :class="{ active: caseConfig.receiveFlag === 'Y' }"
        >접수</span
      >
    </div>
  </div>
</template>

<script setup>
import { bankSVG } from "@priros/common/assets/js/case/bankSVG.js";
import {
  changeTimeFormatAddDot,
  changeTimeFormatAmPm,
} from "@priros/common/assets/js/utils.js";
import { computed } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  caseConfig: Object,
});

const date = computed(() => {
  return props.caseConfig.issueDate.split("T")[0];
});
const time = computed(() => {
  return changeTimeFormatAmPm(
    changeTimeFormatAddDot(props.caseConfig.issueTime)
  );
});

const bankIcon = computed(() => {
  const basePath = "/img/icon/";
  return bankSVG[props.caseConfig.venderId] === undefined
    ? ""
    : basePath + bankSVG[props.caseConfig.venderId].icon;
});

const bankTitle = computed(() =>
  bankSVG[props.caseConfig.venderId] === undefined
    ? ""
    : bankSVG[props.caseConfig.venderId].title
);

const tags = computed(() => {
  //return props.caseConfig.tags.map((c) => `#${c}`)
  return [];
});

const transferText = computed(() => {
  switch (props.caseConfig.remitState) {
    case "N":
      return "송금거절";
    case "Y":
      return "송금완료";
    default:
      return "송금요청";
  }
});

const supplementText = computed(() => {
  switch (props.caseConfig.registSupplement) {
    case "R":
      return "보완요청";
    case "Y":
      return "보완제출완료";
    default:
      return "";
  }
});

const router = useRouter();
const handlerClickCard = () => {
  router.push(`/case/detail-case/${props.caseConfig.tradeCaseId}`);
};
</script>

<style scoped lang="scss">
.my-case-card {
  & + .my-case-card {
    margin-top: 11px;
  }
  padding: 13px 18px 18px;
  border-radius: 8px;
  box-shadow: 2px 3px 12px 0 #00000026;
  .my-case-card-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .my-case-card-name {
    font-weight: $ft-bold;
  }
  .my-case-card-dates {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 6px;
  }
  .my-case-card-date {
    height: 23px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: $ft-medium;
    background-color: #f5f6f7;
    color: #969696;
    padding: 5px 6px;
  }
  .my-case-card-time {
    height: 23px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: $ft-medium;
    background-color: #f5f6f7;
    color: #969696;
    padding: 5px 6px;
  }
  .my-case-card-address {
    font-size: 14px;
    line-height: 16px;
    padding: 8px 0;
    font-weight: $ft-medium;
    overflow: hidden;
  }
}
.my-case-card-tags {
  display: flex;
  align-items: center;
  gap: 4px;
  .my-case-card-bank {
    display: flex;
    align-items: center;
    img {
      width: 13px;
      height: 13px;
      margin-right: 4px;
    }
    p {
      font-size: 12px;
      color: #1a1a1a;
    }
  }
  .my-case-card-tag {
    font-size: 12px;
    color: #235bed;
  }
}
.my-case-card-status {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px 8px 7px;
  border-radius: 4px;
  border: 1px solid #dfdfdf;
  margin-top: 13px;
  gap: 9px;
  position: relative;
  &.align-left {
    justify-content: flex-start;
  }
  .my-case-card-state {
    font-size: 12px;
    font-weight: $ft-semibold;
    color: #c2c2c2;
    &.active {
      color: #334b68;
      font-weight: $ft-bold;
    }
    &.ing {
      color: #00b468;
    }
    &.fail {
      color: #e92c2c;
    }
  }
  .my-case-card-supplement {
    position: absolute;
    top: -22px;
    font-size: 12px;
    font-weight: $ft-semibold;
    color: #334b68;
    right: 0;
    &.wait {
      color: #e92c2c;
    }
  }
}
</style>
