<template>
  <div class="notice-card" @click="handlerClickMoveToNoticeList">
    <p class="notice-card-title">
      {{ notice.title }}
      <img v-if="isNew" src="/img/icon/board-new.svg" aria-hidden />
    </p>
    <p class="notice-card-date">{{ created }}</p>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import dayjs from "@priros/common/node_modules/dayjs";

const props = defineProps({
  notice: {
    type: Object,
    default: () => {},
  },
});

const router = useRouter();

const created = computed(() => {
  return !props.notice.created
    ? ""
    : dayjs(props.notice.created).format("YYYY-MM-DD");
});
const isNew = computed(() => {
  return !props.notice.created
    ? false
    : dayjs(props.notice.created).diff(dayjs(), "day") > -7;
});

const handlerClickMoveToNoticeList = () => {
  router.push("/notice/list");
};
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
    margin-top: 6px;
    font-size: 12px;
    font-weight: $ft-medium;
    color: #c0c0c0;
  }
}
</style>
