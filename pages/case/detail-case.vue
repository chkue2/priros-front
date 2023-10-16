<template>
  <div class="detail-case-top-container">
    <p class="detail-case-top-title">사건상세정보</p>
    <div class="detail-case-table">
      <div class="detail-case-table-header">진행상태</div>
      <div class="detail-case-table-contents flex-spacebetween ft-14 ft-bold">견적보고 <button class="detail-case-button">견적확인</button></div>
      <div class="detail-case-table-header">담당자/방문담당자</div>
      <div class="detail-case-table-contents">조성화/다이렉트로 오택상TL</div>
      <div class="detail-case-table-header">잔금일/잔금시간</div>
      <div class="detail-case-table-contents">2023-09-10 / 오후 12시 20분</div>
      <div class="detail-case-table-header">접수일/접수번호</div>
      <div class="detail-case-table-contents">2023-09-01 / 1234-f1</div>
    </div>
  </div>
  <div class="detail-case-status-container">
    <div class="detail-case-title-container bb">
      <div class="detail-case-title-left">
        <p class="detail-case-title">진행상태</p>
        <button class="detail-case-button button--disabled">수임철회</button>
      </div>
      <button class="detail-case-button button--gray">매수인/매도인 등록</button>
    </div>
    <div class="detail-case-status-card-container">
      <DetailCaseStatusCard v-for="(status, index) in detailCaseStatus" :key="index" :statusConfig="status" />
    </div>
  </div>
  <div class="detail-case-title-container">
    <p class="detail-case-title">상세정보</p>
    <button class="detail-case-button button--gray">거래정보 VC</button>
  </div>
  <div class="detail-case-info-container">
    <div class="detail-case-table pd">
      <div class="detail-case-table-header">목적물</div>
      <div class="detail-case-table-contents ft-14">경기도 과천시 갈현동 135 과천 푸르지오 벨라르테103단지 1310호</div>
      <div class="detail-case-table-header">관할등기소</div>
      <div class="detail-case-table-contents flex-column pt-0">
        <p class="detail-case-table-contents-warning">! 필증우편금지 !</p>
        수원지방법원 안양지원 안양등기소
      </div>
      <div class="detail-case-table-header">계약서</div>
      <div class="detail-case-table-contents flex-spacebetween">매매계약서 <button class="detail-case-button">확인</button></div>
      <div class="detail-case-table-header">매매대금</div>
      <div class="detail-case-table-contents">875,000,000원</div>
      <div class="detail-case-table-header">상환여부</div>
      <div class="detail-case-table-contents">상환있음</div>
      <div class="detail-case-table-header">매수인</div>
      <div class="detail-case-table-contents">유재석</div>
      <div class="detail-case-table-header">휴대폰번호</div>
      <div class="detail-case-table-contents">010-4545-4545</div>
      <div class="detail-case-table-header">이메일주소</div>
      <div class="detail-case-table-contents"></div>
      <div class="detail-case-table-header">대출기관</div>
      <div class="detail-case-table-contents">카카오뱅크</div>
      <div class="detail-case-table-header">상품명</div>
      <div class="detail-case-table-contents">일반주담대</div>
      <div class="detail-case-table-header">대출금</div>
      <div class="detail-case-table-contents">250,000,000원</div>
      <div class="detail-case-table-header">설정대리인</div>
      <div class="detail-case-table-contents flex-spacebetween">박명수 법무사 <button class="detail-case-button">확인</button></div>
      <div class="detail-case-table-header">등록기관</div>
      <div class="detail-case-table-contents flex-spacebetween">국민은행 <button class="detail-case-button">확인</button></div>
      <div class="detail-case-table-header">배상책임보험</div>
      <div class="detail-case-table-contents">가입대상</div>
      <div class="detail-case-table-header">보험료</div>
      <div class="detail-case-table-contents">15,000원</div>
      <div class="detail-case-table-header">등기신청서 작성정보</div>
      <div class="detail-case-table-contents flex-column flex-align-start">
        <button class="detail-case-button">등기필정보 보완보고</button>
        <textarea placeholder="등기신청서 작성 ID 및 작성번호를 입력하세요. (매도인별 식별번호 뒷자리 입력으로 대체 가능)"></textarea>
        <div class="detail-case-table-edit-button">
          <button><img src="/img/icon/edit-gray.svg">입력완료</button>
        </div>
      </div>
    </div>
  </div>
  <div class="detail-case-bottom-container">
    <div class="detail-case-bottom-tabs">
      <p class="detail-case-bottom-tab" :class="{active: tab === 'changed'}" @click="handlerClickTab('changed')">변경내역</p>
      <p class="detail-case-bottom-tab" :class="{active: tab === 'memo'}" @click="handlerClickTab('memo')">메모</p>
      <p class="detail-case-bottom-tab" :class="{active: tab === 'processed'}" @click="handlerClickTab('processed')">처리내역</p>
      <p class="detail-case-bottom-tab" :class="{active: tab === 'files'}" @click="handlerClickTab('files')">첨부파일</p>
    </div>
    <div class="detail-case-bottom-table">
      <DetailCaseChangedTable v-if="tab === 'changed'" />
      <DetailCaseMemoTable v-if="tab === 'memo'" />
      <DetailCaseProcessedTable v-if="tab === 'processed'" />
      <DetailCaseFilesTable v-if="tab === 'files'" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import DetailCaseStatusCard from '~/components/card/DetailCaseStatusCard.vue'
import DetailCaseChangedTable from '~/components/table/DetailCaseChangedTable.vue'
import DetailCaseMemoTable from '~/components/table/DetailCaseMemoTable.vue'
import DetailCaseProcessedTable from '~/components/table/DetailCaseProcessedTable.vue'
import DetailCaseFilesTable from '~/components/table/DetailCaseFilesTable.vue'

import { detailCaseStatus } from '~/assets/js/case/detailCaseStatus'

const route = useRoute()

onMounted(() => {
  console.log(route.query.uid)
})

const tab = ref('changed')
const handlerClickTab = (v) => {
  tab.value = v
}
</script>

<style lang="scss" scoped>
.detail-case-top-container {
  padding: 20px 16px 0;
  .detail-case-top-title {
    font-size: 20px;
    font-weight: $ft-semibold;
    color: #1a1a1a;
    line-height: 24px;
    margin-bottom: 34px;
  }
}
.detail-case-table{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border-top: 1px solid #bebebe;
  border-left: 1px solid #bebebe;
  .detail-case-table-header{
    display: flex;
    align-items: center;
    grid-column: span 2;
    border-right: 1px solid #bebebe;
    border-bottom: 1px solid #bebebe;
    background-color: #f6f6f6;
    font-size: 12px;
    min-height: 36px;
    padding: 8px;
  }
  .detail-case-table-contents {
    display: flex;
    align-items: center;
    grid-column: span 3;
    border-right: 1px solid #bebebe;
    border-bottom: 1px solid #bebebe;
    font-size: 12px;
    padding: 8px;
    &.ft-14{
      font-size: 14px;
    }
    &.ft-bold {
      font-weight: $ft-bold;
    }
    &.flex-spacebetween {
      justify-content: space-between;
    }
    &.flex-align-start{
      align-items: flex-start;
    }
    &.flex-column {
      flex-direction: column;
    }
    &.pt-0 {
      padding-top: 0;
    }
    .detail-case-table-contents-warning {
      width: calc(100% + 16px);
      line-height: 24px;
      background-color: #fc3e36;
      color: #ecff12;
      margin: 0 -8px 8px;
      text-align: center;
      font-weight: $ft-bold;
    }
    textarea {
      width: 100%;
      min-height: 78px;
      padding: 8px;
      border-radius: 9px;
      border: 1px solid #dedede;
      resize: none;
      margin: 8px 0;
      font-size: 12px;
    }
    .detail-case-table-edit-button {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      button {
        display: inline-flex;
        padding: 8px;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        color: #b5b5b5;
        border: none;
        border-radius: 16px;
        img {
          width: 11px;
          height: 11px;
        }
      }
    }
  }
}
.detail-case-button {
  padding: 5px 18px 3px 3px;
  font-size: 12px;
  font-weight: $ft-medium;
  border: 1px solid #000000;
  border-radius: 5px;
  background-color: #ffffff;
  line-height: 17px;
  background-image: url(/img/icon/expand-right-black-bold.svg);
  background-repeat: no-repeat;
  background-position-x: calc(100% - 2px);
  background-position-y: center;
  &.button--gray {
    background-color: #efefef;
  }
  &.button--disabled {
    color: #aeaeae;
    border-color: #aeaeae;
    background-image: url(/img/icon/expand-right-lightgray-bold.svg);
  }
}
.detail-case-status-container {
  padding: 0 16px;
  .detail-case-title-container {
    padding: 40px 0 7px;
  }
}
.detail-case-title-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 16px 7px;
  &.bb {
    border-bottom: 1px solid #d0d0d0;
  }
  .detail-case-title-left {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .detail-case-title {
    font-weight: $ft-semibold;
    color: #1a1a1a;
    line-height: 19px;
  }
}
.detail-case-status-card-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 10px;
  margin-top: 11px;
}
.detail-case-info-container {
  padding: 0 16px;
}
.detail-case-bottom-container{
  margin-top: 30px;
}
.detail-case-bottom-tabs {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #d9d9d9;
  padding: 0 16px;
  .detail-case-bottom-tab {
    padding: 9px 0;
    position: relative;
    font-size: 14px;
    font-weight: $ft-bold;
    color: #d9d9d9;
    min-width: 60px;
    text-align: center;
    &.active {
      color: #000000;
      &::after {
        content: '';
        width: 100%;
        height: 2px;
        background-color: #000000;
        position: absolute;
        bottom: -2px;
        left: 0;
      }
    }
  }
}
.detail-case-bottom-table {
  padding: 10px 16px 40px;
}
</style>