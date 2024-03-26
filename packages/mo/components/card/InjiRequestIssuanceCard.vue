<template>
  <div class="inji-issuance-container">
    <p class="inji-title">전자수입인지 발행을 요청하시겠습니까 ?</p>
    <p class="inji-subtitle">1% 할인된 금액으로 정산은 하루에 한번만!<br>프리로스에서 제공하는 서비스를 이용해보세요.</p>
    <div class="inji-form">
      <p class="inji-form-title">발행금액</p>
      <select v-model="price" v-show="!isPriceInputShow" id="priceSelect" class="inji-form-select">
        <option value="" disabled>선택</option>
        <option v-for="(amount, i) in amountTypeEnums" :key="i" :value="amount[0]">{{ amount[1] }}</option>
      </select>
      <div v-show="isPriceInputShow" class="inji-form-input-container">
        <input v-model="priceInput" ref="priceInputElm" type="text" class="inji-form-input" placeholder="발행금액 직접입력" @keyup.enter="priceInputBlur" @blur="priceInputBlur">
      </div>
      <p class="inji-form-title mt-18">발행명의</p>
      <select v-model="selectName" class="inji-form-select">
        <option v-for="(client, i) in clientTypeEnums" :key="i" :value="client[0]">{{ client[1] }}</option>
      </select>
      <div class="inji-form-input-container">
        <input v-model="name" type="text" class="inji-form-input w-105" :placeholder="namePlaceholder" :readonly="selectName === 'default'">
        <input v-model="num" type="text" class="inji-form-input" :placeholder="numPlaceholder" :readonly="selectName === 'default'">
      </div>
    </div>
    <p class="inji-help-text">• 발행취소는 당일 PM 05:30까지 마이페이지에서 가능</p>
    <p class="inji-help-text">• 인지발행 서비스는 장수인지에서 제공</p>
  </div>
  <div class="inji-issuance-buttons">
    <button class="button--close" @click="handlerClickCloseButton">닫기</button>
    <button class="button--apply" @click="handlerClickApplyButton">발행요청</button>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, computed } from 'vue'
import { useDetailCaseStore } from '~/store/case/detailCase.js'

const amountTypeEnums = ref([])
const clientTypeEnums = ref([])
const firmName = ref('')
const taxNo = ref('')

const detailCaseStore = useDetailCaseStore()
onMounted(() => {
  detailCaseStore.fetchInjiPopupInfo().then(({data}) => {
    console.log(data)
    amountTypeEnums.value = Object.entries(data.selectAmount)
    clientTypeEnums.value = Object.entries(data.selectClientType)
    firmName.value = data.firmName
    taxNo.value = data.taxNo

    name.value = firmName.value
    num.value = taxNo.value
  })
})

const price = ref('')
const priceInput = ref('')
const isPriceInputShow = ref(false)

const priceInputElm = ref(null)

watch(() => price.value, () => {
  if(price.value === 'WRITE') {
    isPriceInputShow.value = true
    setTimeout(() => {
      priceInputElm.value.focus()
    }, 100)
  }
})

const priceInputBlur = () => {
  isPriceInputShow.value = false
  if(!['', '0'].includes(priceInput.value)) {
    // 직접 입력이 비어있지 않고, 0이 아닌 경우
    // select에 option 추가 및 값 설정
    price.value = priceInput.value
    const opt = document.createElement('option')
    opt.text = `${Number(price.value).toLocaleString()}원`
    opt.value = price.value
    document.getElementById('priceSelect').add(opt)
  } else {
    price.value = ''
  }
  priceInput.value = ''
}

const selectName = ref('default')
const name = ref('')
const num = ref('')

const namePlaceholder = computed(() => selectName.value === 'firm' ? '상호명 입력' : '이름 입력')
const numPlaceholder = computed(() => selectName.value === 'firm' ? '사업자등록번호 입력' : '생년월일 입력')

watch(() => selectName.value, () => {
  if(selectName.value === 'default') {
    name.value = firmName.value
    num.value = taxNo.value
  } else {
    name.value = ''
    num.value = ''
  }
})

const emit = defineEmits(['handler-click-close', 'inji-generate'])

const handlerClickCloseButton = () => {
  emit('handler-click-close')
}
const handlerClickApplyButton = () => {
  if(price.value === '' || price.value === '0') {
    alert('발행금액을 선택해주세요.')
    return false
  }
  if(selectName.value === 'firm') {
    if(name.value === '') {
      alert('상호명을 입력해주세요.')
      return false
    }
    if(num.value.length !== 10) {
      alert('사업자등록번호 10자리를 -없이 입력해주세요.')
      return false
    }
  }
  if(selectName.value === 'client') {
    if(name.value === '') {
      alert('이름을 입력해주세요.')
      return false
    }
    if(num.value.length !== 8) {
      alert('생년월일 8자리를 -없이 입력해주세요. (YYYYMMDD)')
      return false
    }
  }
  emit('inji-generate', {
    clientType: selectName.value,
    clientName: name.value,
    clientNumber: num.value,
    requestedAmount: price.value
  })
}
</script>

<style lang="scss" scoped>
.inji-issuance-container{
  padding: 53px 12px 18px;
}
.inji-title {
  font-size: 14px;
  font-weight: $ft-bold;
  color: #1a1a1a;
}
.inji-subtitle {
  font-size: 14px;
  font-weight: $ft-medium;
  color: #1a1a1a;
  margin: 20px 0 40px;
  line-height: 20px;
}
.inji-help-text {
  font-size: 12px;
  font-weight: $ft-medium;
  color: #979797;
  line-height: 20px;
  text-align: left;
  padding-left: 12px;
}
.inji-issuance-buttons {
  display: flex;
  border-top: 1px solid #dfdfdf;
  & > button {
    flex: 1;
    height: 60px;
    font-weight: $ft-bold;
    border: none;
    cursor: pointer;
    &.button--close {
      background-color: #ffffff;
    }
    &.button--apply {
      background-color: #235BED;
      color: #ffffff;
    }
  }
}
.inji-form {
  margin-bottom: 48px;
}
.inji-form-title {
  font-size: 14px;
  font-weight: $ft-bold;
  text-align: left;
  &.mt-18 {
    margin-top: 18px;
  }
}
.inji-form-select {
  font-size: 16px;
  height: 48px;
  width: 100%;
  padding: 0 11px;
  border-radius: 8px;
  border: 1px solid #bfbfbf;
  margin-top: 8px;
}
.inji-form-input-container {
  display: flex;
  gap: 8px;
  margin-top: 8px;
}
.inji-form-input {
  flex: 1;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #bfbfbf;
  padding: 0 11px;
  font-size: 16px;
  &:read-only {
    background-color: #f5f5f5;
  }
  &.w-105 {
    flex: unset;
    width: 105px;
  }
}
</style>