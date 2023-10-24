<template>
  <i :class="classes">
    <svg :width="displaySize" :height="displaySize">
      <use :href="iconHref"></use>
    </svg>
  </i>

</template>

<script setup>
import {computed} from 'vue';
import {formatSize} from "~/utils/formatSize.js";
import svgSprite from "assets/images/icon/svg-sprite.svg";

const props = defineProps({
  variant: {
    type: String,
    required: true
  },
  size: {
    type: [String, Number],
    default: "24px"
  }
});


const displaySize = computed(() => formatSize(props.size));
const iconHref = computed(() => `${svgSprite}#${props.variant}`);
const classes = computed(() => `icon icon-${props.variant}`);

</script>
<style scoped lang="scss">
.icon {
  display: inline-block;
  vertical-align: middle;

  &.icon-log-out,
  &.icon-alert,
  &.icon-headset-help,
  &.icon-pencil,
  &.icon-arrow-right,
  &.icon-chevron {
    fill: none;
  }

  &.icon-pencil {
    //color: #B5B5B5;
  }

  &.icon-exclamation {
    //color: #fff;
  }
}

.icon-alert {
  color: $black;
}
</style>
