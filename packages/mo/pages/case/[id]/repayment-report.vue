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
                :options="options"
                :selected-text="selectedText"
                @click-option="handlerClickOption"
              />
            </div>
            <div class="form-group">
              <div class="label">
                <label for="" class="form-label">상환영수증</label>
              </div>
              <div class="form-input">
                <input type="file">
                <p class="input-file">상환영수증을 첨부해주세요 <img src="/img/icon/file-gray.png" alt=""></p>
              </div>
            </div>
            <div class="form-group">
              <div class="label">
                <label for="" class="form-label">말소확인증</label>
                <span class="form-warning">말소비입금전표, 말소의뢰서로 대체 가능</span>
              </div>
              <div class="form-input">
                <input type="file">
                <p class="input-file">말소확인증을 첨부해주세요 <img src="/img/icon/file-gray.png" alt=""></p>
              </div>
            </div>
            <div class="form-group">
              <div class="label">
                <label for="" class="form-label">기타첨부서류</label>
              </div>
              <div class="form-input">
                <input type="file">
                <p class="input-file">기타 추가적인 서류가 있다면 첨부해주세요 <img src="/img/icon/file-gray.png" alt=""></p>
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
              @handler-click-button="() => {}"
          />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import {ref, computed, onMounted} from "vue";
import {useRoute} from "vue-router";

import { tradeCaseRepay } from '~/services/tradeCaseRepay.js'

import DropDown from '@priros/common/components/form/DropDown'
import CommonBottomButton from '@priros/common/components/button/CommonBottomButton.vue'

definePageMeta({
  layout: false
});

const tradeCaseId = useRoute().params.id
const form = ref({
  repaySubjectYn: '',
  remitFileList: [],
  profFileList: [],
  etcFileList: [],
})
const options = [
  {
    text: '상환보고 대상이 있습니다.',
    value: 'Y'
  },
  {
    text: '상환보고 대상이 없습니다.',
    value: 'N'
  },
]
const selectedText = computed(() => 
  form.value.repaySubjectYn === 'Y' ?
    '상환보고 대상이 있습니다.' :
  form.value.repaySubjectYn === 'N' ?
    '상환보고 대상이 없습니다.'
  : ''  
)

onMounted(() => {
  tradeCaseRepay.get(tradeCaseId)
    .then(({data}) => {
      console.log(data)
    })
    .catch(e => {
      console.log(e)
    })
})

const handlerClickOption = ({value}) => {
  console.log(value)
  form.value.repaySubjectYn = value
}

</script>

<style scoped lang="scss">
@import '@priros/common/assets/scss/views/dialog';
</style>