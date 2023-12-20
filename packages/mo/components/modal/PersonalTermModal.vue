<template>
  <CommonBlackTitleModal title="개인정보 보호정책" @handler-click-close="termsStore.togglePersonalTerm">
    <PersonalTerm />
  </CommonBlackTitleModal>
</template>

<script setup>
import {useTermsStore} from "~/store/termsState.js"
import CommonBlackTitleModal from '~/components/modal/CommonBlackTitleModal.vue'
import PersonalTerm from '@priros/common/components/card/PersonalTerm.vue'


const termsStore = useTermsStore()
</script>