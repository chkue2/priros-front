<template>
  <i :style="{ width: displaySize, height: displaySize }">
    <Image/>
  </i>
</template>

<script setup>

import Image from "~/assets/images/icon/logo.svg?inline";
import {computed} from "vue";
import {formatSize} from "~/utils/formatSize.js";

const props =  defineProps({
  size: {
    type: [String, Number],
    default: "24px"
  }
});

const displaySize = computed(() => formatSize(props.size));

</script>
<style scoped lang="scss">
i {
  display: inline-block;

  > svg {
    width: 100%;
    height: 100%;
    display: block;
  }
}
</style>