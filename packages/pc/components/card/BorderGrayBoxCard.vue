<template>
  <p v-if="title !== ''" class="bottom-button-card-title">{{ title }}</p>
  <p v-if="subTitle !== ''" class="bottom-button-card-subtitle">{{ subTitle }}</p>
  <div id="bottomButtonContainer" class="bottom-button-container">
    <slot />
    <button class="bottom-button" @click="handlerClickButton">{{ buttonText }}</button>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  subTitle: {
    type: String,
    default: ''
  },
  buttonText: {
    type: String,
    default: ''
  },
  backgroundColor: {
    type: String,
    default: '#ffffff'
  }
})

const emits = defineEmits(['click-button'])
const handlerClickButton = () => {
  emits('click-button')
}

onMounted(() => {
  document.querySelector('#bottomButtonContainer').style.backgroundColor = props.backgroundColor
})
</script>
<style scoped lang="scss">
.bottom-button-card-title {
  font-size: 22px;
  font-weight: $ft-bold;
  line-height: 55px;
  text-align: center;
  margin-top: 72px;
  color: #1a1a1a;
}
.bottom-button-card-subtitle {
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #808080;
}
.bottom-button-container {
  width: 458px;
  padding: 30px 28px 23px;
  border-radius: 12px;
  border: 1px solid #dbdbdb;
  margin: 0 auto;
  margin-top: 34px;
}
.bottom-button {
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  border-radius: 6px;
  cursor: pointer;
  font-size: 18px;
  font-weight: $ft-bold;
  color: #ffffff;
  border: none;
}
</style>