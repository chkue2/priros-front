<template>
  <NuxtLayout name="dialog-header" headerTitle="송금요청">
    <TransferAccountForm v-if="transferStore.depth === 1" />
    <TransferAccountConfirm v-if="transferStore.depth === 2" />
    <TransferAccountResult v-if="transferStore.depth === 3" />
  </NuxtLayout>
</template>

<script setup>
import { useTransferStore } from '~/store/transfer.js'
import TransferAccountForm from '~/views/transfer/TransferAccountForm.vue'
import TransferAccountConfirm from '~/views/transfer/TransferAccountConfirm.vue'
import TransferAccountResult from '~/views/transfer/TransferAccountResult.vue'
definePageMeta({
  layout: false
})
const transferStore = useTransferStore()
</script>
