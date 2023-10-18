<template>
  <div class="drop-down" :class="{open: isOpen}">
    <div class="drop-down-select" :class="[{selected: props.selectedText !== ''}, {readonly: isReadonly}]" @click="handlerToggleSelectOpen">
      {{ selectText }}
    </div>
    <div class="drop-down-options">
      <p class="drop-down-option" v-for="(option, index) in props.options" :key="index"  @click="handlerClickDropDownOption(option.value)">{{ option.text }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'

const props = defineProps({
  isReadonly: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: '',
  },
  selectedText: {
    type: String,
    default: ''
  },
  options: Array,
})
const emit = defineEmits(['click-option'])

const selectText = computed(() => {
  return props.selectedText === '' ? props.placeholder : props.selectedText
})

let isOpen = ref(false)
const handlerToggleSelectOpen = () => {
  if(props.isReadonly) {
    isOpen.value = false
    return false
  }
  isOpen.value = !isOpen.value
}

watch(() => isOpen.value, () => {
  if(isOpen.value) {
    document.querySelector('body').style.overflow = 'hidden'
  } else {
    document.querySelector('body').removeAttribute('style')
  }
})

const handlerClickDropDownOption = (value) => {
  emit('click-option', {value})
  handlerToggleSelectOpen()
}
</script>

<style lang="scss" scoped>
.drop-down {
  position: relative;
  &.open {
    .drop-down-options {
      opacity: 1;
      visibility: visible;
    }
  }
  .drop-down-select {
    height: 48px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    border: 1px solid #e5e5e5;
    background-color: #ffffff;
    padding: 0 12px;
    background-image: url(/img/icon/expand-down-gray-bold.svg);
    background-position-x: calc(100% - 12px);
    background-position-y: center;
    background-repeat: no-repeat;
    font-weight: $ft-semibold;
    color: #c1c1c3;
    &.selected {
      color: #000000;
    }
    &.readonly {
      background-image: unset;
      background-color: #f2f2f2;
    }
  }
  .drop-down-options {
    width: 100%;
    max-height: 144px;
    overflow-y: auto;
    overflow-x: hidden;
    border-radius: 8px;
    border: 1px solid #000000;
    position: absolute;
    left: 0;
    top: 56px;
    opacity: 0;
    visibility: hidden;
    transition: all .3s ease-in-out;
    background-color: #ffffff;
    z-index: $zi-dropdown;
    .drop-down-option {
      padding: 15px 12px;
      font-size: 14px;
      font-weight: $ft-semibold;
      color: #424242;
    }
  }
}
</style>