<template>
  <div class="main-how-to-use-card">
    <img :src="howConfig.image" alt class="main-how-to-use-image">
    <div class="main-how-to-use-right">
      <p class="main-how-to-use-title">{{howConfig.title}}</p>
      <p class="main-how-to-use-content">{{howConfig.content}}</p>
    </div>
  </div>  
</template>
<script setup>
const props = defineProps({
  howConfig: Object,
})
</script>
<style scoped lang="scss">
.main-how-to-use-card {
  display: flex;
  align-items: center;
  gap: 14px;
  .main-how-to-use-image {
    width: 97px;
    height: auto;
  }
  .main-how-to-use-title {
    font-size: 14px;
    line-height: 20px;
    font-weight: $ft-bold;
  }
  .main-how-to-use-content {
    font-size: 12px;
    font-weight: $ft-medium;
    line-height: 17px;
    color: #878787;
  }
}
</style>