<template>
  <CommonBlackTitleModal title="서비스이용약관" @handler-click-close="termsStore.toggleServiceTerm">
    <ServiceTerm />
  </CommonBlackTitleModal>
</template>

<script setup>
import {useTermsStore} from "~/store/termsState.js"
import CommonBlackTitleModal from '~/components/modal/CommonBlackTitleModal.vue'
import ServiceTerm from '@priros/common/components/card/ServiceTerm.vue'

const termsStore = useTermsStore()
</script>