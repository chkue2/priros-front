<template>
  <component :is="tag"
             :type="tag === 'button' ? nativeType : ''"
             class="btn"
             :class="classes">
    <span class="btn-inner--icon" v-if="$slots.icon || icon && $slots.default">
            <slot name="icon">
                <i :class="icon"></i>
            </slot>
        </span>
    <i v-if="!$slots.default" :class="icon"></i>
    <span class="btn-inner--text" v-if="$slots.icon || icon && $slots.default">
            <slot>
                {{ text }}
            </slot>
        </span>
    <slot v-if="!$slots.icon && !icon"></slot>

  </component>

</template>
<script setup>

const props = defineProps({
  tag: {
    type: String,
    default: 'button'
  },
  nativeType: {
    type: String,
    default: 'button'
  },
  variant: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: "",
  }
});



const classes = computed(() => {
  let btnClass = [];

  if (props.variant !== ""){
    btnClass.push(`btn-${props.variant}`);
  }

  return btnClass;
});



</script>
<style scoped lang="scss">

</style>