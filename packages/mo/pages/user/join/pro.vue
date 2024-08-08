<template>
  <JoinTermsForm v-if="step === 1" @next-button="handlerClickNextButton" />
  <JoinProForm v-if="step === 2" />
</template>

<script setup>
import { ref } from "vue";

import JoinTermsForm from "~/components/form/JoinTermsForm.vue";
import JoinProForm from "~/components/form/JoinProForm.vue";

const step = ref(1);

const handlerClickNextButton = () => {
  step.value++;
};
</script>
