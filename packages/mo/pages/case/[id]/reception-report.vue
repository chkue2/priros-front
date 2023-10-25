<template>
  <NuxtLayout name="dialog-header" headerTitle="접수보고">
    <div class="dialog-wrapper">
      <div class="container">
        <div class="inner-body">
          <div class="forms">
            <div class="form-group">
              <div class="label">
                <label for="" class="form-label">접수일</label>
              </div>
              <div class="form-input">
                <input type="date" readonly>
              </div>
            </div>
            <div class="form-group">
              <div class="label">
                <label for="" class="form-label">접수번호</label>
                <span class="form-warning">해당 명의인의 접수번호를 입력해주세요</span>
              </div>
              <div class="form-input">
                <input type="tel">
                <input type="tel">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div>
          <CommonBottomButton
              id="btn-send"
              text="접수보고"
              backgroundColor="#000000" height="60px" width="100%" color="#fff"
              :font-weight="700"
              :disabled="btnSendDisable"
              @handler-click-button="handleBtnSendClick"
          />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import {ref, computed, onMounted} from "vue";
import {useRoute, useRouter} from "vue-router";

import DropDown from "~/components/form/DropDown.vue";
import CommonBottomButton from '@priros/common/components/button/CommonBottomButton.vue'

definePageMeta({
  layout: false
});

const isCompleted = ref(false);

const btnSendDisable = false;

</script>

<style scoped lang="scss">
@import '@priros/common/assets/scss/views/dialog'
</style>