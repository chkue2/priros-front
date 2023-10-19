<template>
  <NuxtLayout name="dialog-header" headerTitle="송금요청">
    <TransferAccountForm />
  </NuxtLayout>
</template>

<script setup>
import { useTransferStore } from '~/store/transfer.js'
import TransferAccountForm from '~/views/transfer/TransferAccountForm.vue'
definePageMeta({
  layout: false
})
const transferStore = useTransferStore()
</script>
