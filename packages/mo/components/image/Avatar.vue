<template>
  <div class="avatar">
    <img :src="src"/>
  </div>
</template>
<script setup>


const props = defineProps({
  src: String
});


</script>
<style scoped lang="scss">

.avatar {
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: none;
  overflow: hidden;
  vertical-align: middle;

  img {
    width: 100%;
    height: 100%;
    display: block;
  }
}
</style>