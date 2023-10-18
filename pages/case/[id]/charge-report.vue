<template>
  <NuxtLayout name="dialog-header" headerTitle="담당자 보고">
    <div class="container">

      <div class="inner-header">
        <div>
          <span class="badge badge-secondary">
              담당자 보고전 확인
          </span>
        </div>
        <div class="txt-help ">
          담당자의 프로필이 고객에게 알림톡으로 전송됩니다.
          <br>연락처 및 담당자의 정보를 확인해주세요.
        </div>
      </div>
      <div class="inner-body">


        <div class="form-group">
          <div class="label">
            담당자 정보
          </div>
          <div>
            <DropDown placeholder="담당자 정보" :options="bankOptions" :selected-text="bankSelectedText" @click-option="handlerBankSelectValue"/>
          </div>
        </div>

      </div>
      보고페이지 {{ tradeCaseId }}
    </div>
  </NuxtLayout>
</template>

<script setup>
import {useRoute} from 'vue-router';
import DropDown from "~/components/form/DropDown.vue";

definePageMeta({
  layout: false
});

const tradeCaseId = useRoute().params.id;



</script>

<style scoped lang="scss">

</style>