<template>
  <NuxtLayout name="dialog-header" headerTitle="신청정보 보고">
    <div class="dialog-wrapper">
      <div class="container">
        <div class="inner-header">
          <span class="badge badge-primary-gradient">신청정보보고 전 확인</span>
          <div class="txt-help">
            매도인의 주소경정등기 누락은 
            <br>등기취하 및 재접수가 필요한 중요사항입니다.
          </div>
        </div>
        <div class="inner-body">
          <div class="forms">
            <div class="form-group">
              <div class="label">
                <label for="" class="form-label">등기신청서 작성정보</label>
              </div>
              <div class="form-input">
                <textarea placeholder="등기신청서 작성 ID 및 작성번호를 입력하세요"></textarea>
              </div>
            </div>
            <div class="form-group">
              <div class="label">
                <label for="" class="form-label">매수인별 취득지분</label>
                <div class="label-radio">
                  <label class="form-label">
                    <input type="radio"><span>단독명의</span>
                  </label>
                  <label class="form-label">
                    <input type="radio"><span>공동명의</span>
                  </label>
                </div>
              </div>
              <div class="form-input">
                <textarea placeholder="매수인별로 이름과 취득지분을 입력하세요"></textarea>
              </div>
            </div>
            <div class="form-group">
              <div class="label">
                <label for="" class="form-label">매수인 주소변동</label>
                <div class="label-radio">
                  <label class="form-label">
                    <input type="radio"><span>동일</span>
                  </label>
                  <label class="form-label">
                    <input type="radio"><span>변동발생</span>
                  </label>
                </div>
              </div>
              <div class="form-input">
                <input type="file">
                <p class="input-file">매수인의 주민등록초본을 첨부해주세요</p>
                <img src="/img/icon/file-gray.png" alt="">
              </div>
            </div>
            <div class="form-group">
              <div class="label">
                <label for="" class="form-label">기타사항</label>
              </div>
              <div class="form-input">
                <textarea placeholder="설정대리인에게 전달할 내용을 입력하세요"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div>
          <CommonBottomButton
              id="btn-send"
              text="신청정보보고"
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