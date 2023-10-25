<template>
  <NuxtLayout name="dialog-header" headerTitle="상환보고">
    <div class="dialog-wrapper">
      <div class="container">
        <div class="inner-body">
          <div class="forms">
            <div class="form-group">
              <div class="label">
                <label for="" class="form-label">잔금일 기준 상환업무</label>
              </div>
              <DropDown
                placeholder="선택하기"
                :options="[]"
                selected-text=""
                @click-option="() => console.log(1)"
              />
            </div>
            <div class="form-group">
              <div class="label">
                <label for="" class="form-label">상환영수증</label>
              </div>
              <div class="form-input">
                <input type="file">
                <p class="input-file">상환영수증을 첨부해주세요</p>
                <img src="/img/icon/file-gray.png" alt="">
              </div>
            </div>
            <div class="form-group">
              <div class="label">
                <label for="" class="form-label">말소확인증</label>
                <span class="form-warning">말소비입금전표, 말소의뢰서로 대체 가능</span>
              </div>
              <div class="form-input">
                <input type="file">
                <p class="input-file">말소확인증을 첨부해주세요</p>
                <img src="/img/icon/file-gray.png" alt="">
              </div>
            </div>
            <div class="form-group">
              <div class="label">
                <label for="" class="form-label">기타첨부서류</label>
              </div>
              <div class="form-input">
                <input type="file">
                <p class="input-file">기타 추가적인 서류가 있다면 첨부해주세요</p>
                <img src="/img/icon/file-gray.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div>
          <CommonBottomButton
              id="btn-send"
              text="상환보고"
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