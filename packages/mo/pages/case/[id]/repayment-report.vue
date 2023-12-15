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
            <div v-if="form.repaySubjectYn === 'Y'" class="form-group">
              <div class="label flex-start">
                <label for="" class="form-label">상환영수증</label>
                <p class="form-tag">
                  <img src="/img/icon/check-circle-red.svg"> 필수
                </p>
              </div>
              <div class="form-input">
                <input ref="remitFileList" type="file" multiple @change="handlerChangeRemitFileList">
                <p class="input-file" @click="handlerClickRemitFileList">{{ remitFileListText }} <img src="/img/icon/file-gray.png" alt=""></p>
              </div>
            </div>
            <div v-if="form.repaySubjectYn === 'Y'" class="form-group">
              <div class="label flex-start">
                <label for="" class="form-label">말소확인증</label>
                <p class="form-tag">
                  <img src="/img/icon/check-circle-red.svg"> 필수
                </p>
              </div>
              <div class="form-input">
                <input ref="profFileList" type="file" multiple @change="handlerChangeProfFileList">
                <p class="input-file" @click="handlerClickProfFileList">{{ profFileListText }} <img src="/img/icon/file-gray.png" alt=""></p>
              </div>
            </div>
            <div class="form-group">
              <div class="label flex-start">
                <label for="" class="form-label">기타첨부서류</label>
                <p v-if="form.repaySubjectYn === 'N'" class="form-tag">
                  <img src="/img/icon/check-circle-red.svg"> 필수
                </p>
              </div>
              <div class="form-input">
                <input ref="etcFileList" type="file" multiple @change="handlerChangeEtcFileList">
                <p class="input-file" @click="handlerClickEtcFileList">{{ etcFileListText }} <img src="/img/icon/file-gray.png" alt=""></p>
              </div>
            </div>
            <div v-if="form.repaySubjectYn === 'N'" class="form-help-container">
              <img src="/img/cha/cha-04.png" class="form-help-image">
              <p class="form-help-title">한번만 읽어주세요</p>
              <p class="form-help-content">
                상환보고 대상이 없거나, 미리 상환이 완료되어 상환업무 및 보고대상이 없는 경우에도 말소된 등기부등본, 상환영수증, 말소의뢰증빙 등 최소 1개 이상의 증빙을 첨부해야합니다.
              </p>
              <div class="form-help-box">
                <p class="form-help-box-title">주의사례</p>
                <p class="form-help-box-content">매도인이 며칠전 상환했다는 말만 믿고, 상환업무를 수행하지 않고 상환여부도 확인하지 않았으나 실제로는 상환되지 않음</p>
              </div>
            </div>
            <p v-if="form.repaySubjectYn === 'Y'" class="form-help-warning">말소확인증은 말소비입금전표,말소의뢰서로 대체 가능합니다.</p>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div>
          <CommonBottomButton
              id="btn-send"
              text="상환보고"
              :background-color="isSuccess ? '#000000' : '#989898'" height="60px" width="100%" color="#fff"
              :font-weight="700"
              @handler-click-button="handlerClickReport"
          />
        </div>
      </div>
    </div>
    <CommonAlertModal
      v-if="isSuccessModalShow"
      text="상환보고가 완료되었습니다."
      @handler-click-button="toggleSuccessModal"
    />
  </NuxtLayout>
</template>

<script setup>
import {ref, computed, onMounted} from "vue";
import {useRoute} from "vue-router";

import { tradeCaseRepay } from '~/services/tradeCaseRepay.js'

import DropDown from '@priros/common/components/form/DropDown'
import CommonBottomButton from '@priros/common/components/button/CommonBottomButton.vue'
import CommonAlertModal from '@priros/common/components/modal/CommonAlertModal.vue'

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
    text: '상환있음',
    value: 'Y'
  },
  {
    text: '상환없음',
    value: 'N'
  },
]
const selectedText = computed(() => 
  form.value.repaySubjectYn === 'Y' ?
    '상환있음' :
  form.value.repaySubjectYn === 'N' ?
    '상환없음'
  : ''  
)

const remitFileList = ref(null)
const remitFileListObj = ref(null)
const profFileList = ref(null)
const profFileListObj = ref(null)
const etcFileList = ref(null)
const etcFileListObj = ref(null)

const handlerClickRemitFileList = () => {
  remitFileList.value.click()
}
const handlerChangeRemitFileList = (e) => {
  remitFileListObj.value = Array.from(e.target.files)
}
const remitFileListText = computed(() => {
  return remitFileListObj.value !== null ?
    `${remitFileListObj.value[0].name} 포함 ${remitFileListObj.value.length}개` :
    form.value.remitFileList.length > 0 ?
    `${form.value.remitFileList[0].fileName} 포함 ${form.value.remitFileList.length}개` :
    '상환영수증을 첨부해주세요'
})

const handlerClickProfFileList = () => {
  profFileList.value.click()
}
const handlerChangeProfFileList = (e) => {
  profFileListObj.value = Array.from(e.target.files)
}
const profFileListText = computed(() => {
  return profFileListObj.value !== null ?
    `${profFileListObj.value[0].name} 포함 ${profFileListObj.value.length}개` :
    form.value.profFileList.length > 0 ?
    `${form.value.profFileList[0].fileName} 포함 ${form.value.profFileList.length}개` :
    '말소확인증을 첨부해주세요'
})

const handlerClickEtcFileList = () => {
  etcFileList.value.click()
}
const handlerChangeEtcFileList = (e) => {
  etcFileListObj.value = Array.from(e.target.files)
}
const etcFileListText = computed(() => {
  return etcFileListObj.value !== null ?
    `${etcFileListObj.value[0].name} 포함 ${etcFileListObj.value.length}개` :
    form.value.etcFileList.length > 0 ?
    `${form.value.etcFileList[0].fileName} 포함 ${form.value.etcFileList.length}개` :
    '기타 추가적인 서류가 있다면 첨부해주세요'
})

const isSuccess = computed(() => {
  return (
    form.value.repaySubjectYn !== '' &&
    form.value.repaySubjectYn === 'Y' ?
    (
      (form.value.remitFileList.length > 0 || remitFileListObj.value !== null) &&
      (form.value.profFileList.length > 0 || profFileListObj.value !== null) 
    ) : 
    (
      (form.value.etcFileList.length > 0 || etcFileListObj.value !== null) 
    )
    
  )
})

onMounted(() => {
  tradeCaseRepay.get(tradeCaseId)
    .then(({data}) => {
      if(data) {
        form.value.repaySubjectYn = data.repaySubjectYn
        form.value.remitFileList = data.remitFileList
        form.value.profFileList = data.profFileList
        form.value.etcFileList = data.etcFileList
      }
    })
    .catch(e => {
      console.log(e)
    })
})

const handlerClickOption = ({value}) => {
  form.value.repaySubjectYn = value
}

const isSuccessModalShow = ref(false)
const toggleSuccessModal = () => {
  isSuccessModalShow.value = !isSuccessModalShow.value
}

const handlerClickReport = () => {
  if(!isSuccess.value) {
    if(form.value.repaySubjectYn === '') {
      alert('잔금일 기준 상환업무를 선택해주세요.')
    } else if(form.value.repaySubjectYn === 'Y') {
      if(form.value.remitFileList.length === 0 && remitFileListObj.value === null) {
        alert('상환영수증을 첨부해주세요.')
      } else if(form.value.profFileList.length === 0 && profFileListObj.value === null) {
        alert('말소확인증을 첨부해주세요.')
      }
    } else if(form.value.repaySubjectYn === 'N') {
      if(form.value.etcFileList.length === 0 && etcFileListObj.value === null) {
        alert('기타첨부서류를 첨부해주세요.')
      }
    }
    return false
  }

  const formData = new FormData()
  formData.append('repaySubjectYn', form.value.repaySubjectYn)
  if(remitFileListObj.value !== null) {
    remitFileListObj.value.forEach(file => {
      formData.append('remitFileList', file)
    })
  }
  if(profFileListObj.value !== null) {
    profFileListObj.value.forEach(file => {
      formData.append('profFileList', file)
    })
  }
  if(etcFileListObj.value !== null) {
    etcFileListObj.value.forEach(file => {
      formData.append('etcFileList', file)
    })
  }

  tradeCaseRepay.post(tradeCaseId, formData)
    .then(() => {
      toggleSuccessModal()
    })
    .catch(e => {
      alert(e.response.data.message)
    })
}

</script>

<style scoped lang="scss">
@import '@priros/common/assets/scss/views/dialog';
.form-help-container {
  margin-top: 58px;
  text-align: center;
}
.form-help-image {
  width: 133px;
  height: auto;
}
.form-help-title {
  font-size: 30px;
  line-height: 42px;
}
.form-help-content {
  margin: 8px 0 50px;
  font-size: 13px;
  line-height: 20px;
  color: #808080;
  word-break: keep-all;
}
.form-help-box {
  padding: 8px 15px;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  text-align: left;
  background-color: #f8f8f8;
}
.form-help-box-title {
  font-size: 12px;
  line-height: 16px;
  font-weight: $ft-semibold;
}
.form-help-box-content {
  font-size: 12px;
  line-height: 16px;
}
.form-help-warning {
  margin-top: 6px;
  font-size: 12px;
  color: #3c322f;
}
.form-tag {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 20px;
  background-color: rgba(130, 130, 130, 0.1);
  border-radius: 8px;
  font-size: 12px;
  line-height: 16px;
  color: #e92c2c;
  font-weight: $ft-bold;
  margin-left: 12px;
  & > img {
    margin-bottom: 2px;
  }
}
</style>