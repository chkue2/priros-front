<template>
  <i :style="{ width: displaySize, height: displaySize }"><Image /></i>
</template>

<script setup>

import Image from "~/assets/images/icon/logo.svg?inline";

const {size} = defineProps({
  size: {
    type: [String, Number],
    default: "24px"
  }
});

const displaySize = computed(() => {
  if (typeof size === 'number') {
    return `${size}px`;
  } else if (!/[\d\s]px|%|em|rem|vh|vw|vmin|vmax|cm|mm|in|pt|pc|ex|ch|cap|ic|lh|rlh$/i.test(size)) {
    return `${size}px`;
  }
  return size;
});

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