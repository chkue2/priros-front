<template>
  <button :id="id" class="common-bottom-button" @click="handlerClickButton">
    {{ text }}
  </button>
</template>
<script setup>
import { onMounted, watch } from 'vue'
const props = defineProps({
  id: String,
  text: String,
  backgroundColor: {
    type: String,
    default: '#000000'
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
  },
  border: {
    type: String,
    default: 'none'
  }
})

const emit = defineEmits(['handler-click-button'])

onMounted(() => {
  changeStyle()
})

watch(() => props, () => {
  changeStyle()
}, {deep: true})

const handlerClickButton = () => {
  emit('handler-click-button')
}

const changeStyle = () => {
  const target = document.querySelector(`#${props.id}`)

  target.style.width = props.width
  target.style.height = props.height
  target.style.backgroundColor = props.backgroundColor
  target.style.color = props.color
  target.style.fontSize = `${props.fontSize}px`
  target.style.fontWeight = props.fontWeight
  target.style.border = props.border
}
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