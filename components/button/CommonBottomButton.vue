<template>
  <button :id="id" class="common-bottom-button">
    {{ text }}
  </button>
</template>
<script setup>
import { defineProps, onMounted } from 'vue'
const props = defineProps({
  id: String,
  text: String,
  backgroundColor: {
    type: String,
    default: '#00000'
  },
  color: {
    type: String,
    default: '#ffffff'
  },
  fontSize: {
    type: Number,
    default: 16
  },
  height: {
    type: String,
    default: '30px'
  },
  width: {
    type: String,
    defualt: '100px'
  },
  fontWeight: {
    type: Number,
    default: 400
  }
})

onMounted(() => {
  const target = document.querySelector(`#${props.id}`)

  target.style.width = props.width
  target.style.height = props.height
  target.style.backgroundColor = props.backgroundColor
  target.style.color = props.color
  target.style.fontSize = `${props.fontSize}px`
  target.style.fontWeight = props.fontWeight
})
</script>
<style scoped lang="scss">
.common-bottom-button {
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>