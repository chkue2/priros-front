<template>
  <div class="market-container">
    <div class="market-nav">마켓수임 > 매칭 > 사건상세정보</div>
    <div class="market-write-type">
      <div class="type-item active">
        <span class="type-item-top">보고를 완료했어요</span>
        <div class="type-item-bottom">
          <i><img src="/img/icon/check-white.svg"></i>
          <span>견적보고</span>
          <img src="/img/icon/expand-right-black.svg">
        </div>
      </div>
      <div class="type-item active">
        <span class="type-item-top">보고를 완료했어요</span>
        <div class="type-item-bottom">
          <i><img src="/img/icon/check-white.svg"></i>
          <span>담당자보고</span>
          <img src="/img/icon/expand-right-black.svg">
        </div>
      </div>
      <div class="type-item active">
        <span class="type-item-top">보고를 완료했어요</span>
        <div class="type-item-bottom">
          <i><img src="/img/icon/check-white.svg"></i>
          <span>일정보고</span>
          <img src="/img/icon/expand-right-black.svg">
        </div>
      </div>
      <div class="type-item" @click="toggleTransferAccountModal">
        <span class="type-item-top">클릭하여 진행하기</span>
        <div class="type-item-bottom">
          <i><img src="/img/icon/check-white.svg"></i>
          <span>송금요청</span>
          <img src="/img/icon/expand-right-black.svg">
        </div>
      </div>
      <div class="type-item">
        <span class="type-item-top">클릭하여 진행하기</span>
        <div class="type-item-bottom">
          <i><img src="/img/icon/check-white.svg"></i>
          <span>신청정보보고</span>
          <img src="/img/icon/expand-right-black.svg">
        </div>
      </div>
      <div class="type-item">
        <span class="type-item-top">클릭하여 진행하기</span>
        <div class="type-item-bottom">
          <i><img src="/img/icon/check-white.svg"></i>
          <span>상환보고</span>
          <img src="/img/icon/expand-right-black.svg">
        </div>
      </div>
      <div class="type-item">
        <span class="type-item-top">클릭하여 진행하기</span>
        <div class="type-item-bottom">
          <i><img src="/img/icon/check-white.svg"></i>
          <span>접수보고</span>
          <img src="/img/icon/expand-right-black.svg">
        </div>
      </div>
    </div>
    <div class="market-detail-info">
      <div class="info-header">진행상태</div>
      <div class="info-contents contents-3">
        일정등록
        <div class="info-contents-buttons">
          <button>견적보기</button>
        </div>
      </div>
      <div class="info-header">담당자</div>
      <div class="info-contents">오택상</div>
      <div class="info-header">방문 담당자</div>
      <div class="info-contents">홍길동</div>
      <div class="info-header">잔금일</div>
      <div class="info-contents">2023-09-15</div>
      <div class="info-header">잔금 시간</div>
      <div class="info-contents">오전 9시30분</div>
      <div class="info-header">접수일</div>
      <div class="info-contents">2023-09-11</div>
      <div class="info-header">접수번호</div>
      <div class="info-contents">A20240911-APA1</div>
    </div>
    <div class="market-detail-buttons">
      <button class="button--white">
        <span>접수보고</span>
        <img src="/img/icon/expand-right-black.svg">
      </button>
      <button class="button--gray">
        <span>사건위임</span>
        <img src="/img/icon/expand-right-black.svg">
      </button>
    </div>
    <div class="market-detail-info">
      <div class="info-header">목적물</div>
      <div class="info-contents contents-3">
        서울특별시 강남구 도곡동 000 주소가 두줄로 이어질수도있나요요 그렇다면 이렇게 길게 두 줄로 가요 
      </div>
      <div class="info-header">관할 등기소</div>
      <div class="info-contents contents-3">
        서울중앙지방법원 등기소
      </div>
      <div class="info-header">계약서</div>
      <div class="info-contents contents-3">
        매매계약서 <button class="button--black">파일보기</button>
      </div>
      <div class="info-header">매매대금</div>
      <div class="info-contents contents-3">
        250,000,000원 <button class="button--black">변경하기</button>
      </div>
      <div class="info-header">매수인</div>
      <div class="info-contents contents-3">홍길동</div>
      <div class="info-header">잔금일</div>
      <div class="info-contents contents-3 flex-start">
        2023년 7월 3일 <div class="info-contents-buttons"><button>일정 3일</button></div>
      </div>
      <div class="info-header">휴대전화번호</div>
      <div class="info-contents contents-3">010-1234-4567</div>
      <div class="info-header">이메일주소</div>
      <div class="info-contents contents-3">ASEONSHINES@GMAIL.COM</div>
      <div class="info-header">대출기관/상품명</div>
      <div class="info-contents contents-3">케이뱅크 / 일반주담대</div>
      <div class="info-header">대출금</div>
      <div class="info-contents contents-3 flex-start">
        300,000,000원 <span class="tag--gray">상환있음</span>
      </div>
      <div class="info-header">설정대리인</div>
      <div class="info-contents contents-3">
        김마리 법무사 <div class="info-contents-buttons"><button>정보보기</button></div>
      </div>
      <div class="info-header">등록기관</div>
      <div class="info-contents contents-3 flex-start">
        어떤소속기관 <div class="info-contents-buttons"><button>정보보기</button></div>
      </div>
      <div class="info-header">배상책임보험</div>
      <div class="info-contents contents-3">해당없음</div>
      <div class="info-header">보험료</div>
      <div class="info-contents contents-3">0원</div>
      <div class="info-header">전달사항</div>
      <div class="info-contents contents-3"> 전달사항 내용은  특별히 길게함전달사항 내용은  특별히 길게함전달사항 내용은  특별히 길게함전달사항 내용은  특별히 길게함전달사항 내용은  특별히 길게함전달사항 내용은  특별히 길게함전달</div>
      <div class="info-header">보험료</div>
      <div class="info-contents contents-3 flex-column">
        <div class="contents-top">
          <div class="info-contents-buttons"><button>등기필정보 보완보고</button></div>
          <button class="button--edit"><img src="/img/icon/edit-gray.svg">입력완료</button>
        </div>
        <textarea class="contents-area" placeholder="등기신청서 작성 ID 및 작성번호를 입력하세요 (매도인별 식별번호 뒷자리 입력으로 대체 가능)"></textarea>
      </div>
    </div>
    <MarketTabs @click-tab="handlerClickTab" />
    <div class="market-tables">
      <DetailCaseChangedTable v-if="tab === 'changed'" />
      <DetailCaseMemoTable v-if="tab === 'memo'" />
      <DetailCaseProcessedTable v-if="tab === 'processed'" />
      <DetailCaseFilesTable v-if="tab === 'files'" />
    </div>
  </div>
  <TransferAccountModal v-if="isTransferAccountModalShow" @close-modal="toggleTransferAccountModal" />
</template>

<script setup>
import { ref } from 'vue'

import MarketTabs from '~/components/tab/MarketTabs.vue'
import DetailCaseChangedTable from '@priros/common/components/table/DetailCaseChangedTable.vue'
import DetailCaseMemoTable from '@priros/common/components/table/DetailCaseMemoTable.vue'
import DetailCaseProcessedTable from '@priros/common/components/table/DetailCaseProcessedTable.vue'
import DetailCaseFilesTable from '@priros/common/components/table/DetailCaseFilesTable.vue'
import TransferAccountModal from '~/components/modal/market/TransferAccountModal.vue'

const tab = ref('changed')
const handlerClickTab = (v) => {
  tab.value = v
}

const isTransferAccountModalShow = ref(false)
const toggleTransferAccountModal = () => {
  isTransferAccountModalShow.value = !isTransferAccountModalShow.value
}
</script>

<style scoped lang="scss">
@import '~/assets/scss/market/common.scss';
@import '~/assets/scss/market/write.scss';
@import '~/assets/scss/market/detail.scss';
.market-detail-buttons {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 6px;
  margin: -50px 0 74px;
  & > button {
    width: 109px;
    height: 41px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 5px;
    border: 1px solid #000000;
    cursor: pointer;
    &.button--gray {
      background-color: #c2c2c2;
    }
    &.button--white {
      opacity: .5;
    }
  }
}
button {
  &.button--black {
    width: 108px;
    height: 44px;
    border-radius: 5px;
    border: none;
    background-color: #404040;
    font-size: 16px;
    font-weight: $ft-medium;
    color: #ffffff;
    cursor: pointer;
  }
}
.tag--gray {
  width: 75px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 11px;
  background-color: #999999;
  font-size: 14px;
  color: #ffffff;
}
.contents-top {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.button--edit {
  border-radius: 16px;
  background-color: #eeeeee;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 0 14px;
  height: 32px;
  color: #858585;
  cursor: pointer;
}
.contents-area {
  width: 100%;
  height: 90px;
  border: 1px solid #dedede;
  border-radius: 9px;
  resize: none;
  padding: 12px;
  margin-top: 8px;
}
</style>