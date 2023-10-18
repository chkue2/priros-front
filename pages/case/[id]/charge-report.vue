<template>
  <div>
    보고페이지 {{id}}
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const id = useRoute().params.id;
</script>

<style scoped lang="scss">

</style>


