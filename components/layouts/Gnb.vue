<template>
  <div class="gnb" :class="{active: isActive}">

  </div>
</template>

<script setup>


const {isActive} = defineProps(['isActive']);
</script>

<style scoped lang="scss">
@import "gnb";
</style>