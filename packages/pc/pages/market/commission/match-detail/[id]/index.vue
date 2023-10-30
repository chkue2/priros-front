<template>
  <div class="market-container">
    <div class="market-nav">마켓의뢰 > 매칭 > 사건상세정보</div>
    <div class="market-write-type">
      <div class="type-item active">
        <div class="type-item-bottom">
          <i><img src="/img/icon/check-white.svg"></i>
          <span>의뢰대기 사건</span>
          <img src="/img/icon/expand-right-black.svg">
        </div>
      </div>
      <div class="type-item">
        <div class="type-item-bottom">
          <i><img src="/img/icon/check-white.svg"></i>
          <span>매칭대기 사건</span>
          <img src="/img/icon/expand-right-black.svg">
        </div>
      </div>
    </div>
    <div class="market-form">
      <div class="market-form-column">
        <div class="form-title">
          <span>목적물 <b class="red-point">*</b></span>
        </div>
        <div class="form-contents">
          <div class="form-input read-only" style="width: 468px;">
            <input type="text" readonly style="width: 70%;">
            <button class="address-search-button">
              주소검색 <img src="/img/icon/search-black.svg">
            </button>
          </div>
          <p class="form-subtitle">상세주소</p>
          <div class="form-input" style="width: 398px;">
            <input type="text">
          </div>
        </div>
      </div>
      <div class="market-form-column">
        <div class="form-title">
          <span>계약서 <b class="red-point">*</b></span>
        </div>
        <div class="form-contents">
          <div class="form-input" style="width: 468px;">
            <input type="file">
            <input type="text" readonly style="width: 90%;">
            <img src="/img/icon/file-gray.png" class="form-file">
          </div>
          <button class="black-button">
            파일보기
          </button>
        </div>
      </div>
      <div class="market-form-column">
        <div class="form-title">
          <span>매매대금 <b class="red-point">*</b></span>
        </div>
        <div class="form-contents">
          <div class="form-input" style="width: 468px;">
            <input type="text" style="width: 100%;">
          </div>
        </div>
      </div>
      <div class="market-form-column">
        <div class="form-title">
          <span>매수인 <b class="red-point">*</b></span>
        </div>
        <div class="form-contents">
          <div class="form-input" style="width: 159px;">
            <input type="text" style="width: 100%;">
          </div>
          <button class="black-button">
            + 공동 매수인
          </button>
          <p class="form-help-text">매수인이 2인 이상인 경우, 공동 매수인 기능을 사용하여 추가 및 수정하세요</p>
        </div>
      </div>
      <div class="market-form-column">
        <div class="form-title">
          <span>잔금일 <b class="red-point">*</b></span>
        </div>
        <div class="form-contents">
          <div class="form-input" style="width: 271px;">
            <input type="date" style="width: 100%;">
          </div>
        </div>
      </div>
      <div class="market-form-column">
        <div class="form-title">
          <span>매칭지연 기준일 <b class="red-point">*</b></span>
        </div>
        <div class="form-contents">
          <select style="width: 222px;"><option value="">직접 선택</option></select>
          <div class="form-input" style="width: 271px;">
            <input type="date" style="width: 100%;">
          </div>
        </div>
      </div>
      <div class="market-form-column">
        <div class="form-title">
          <span>휴대폰번호(알림수신용) <b class="red-point">*</b></span>
        </div>
        <div class="form-contents">
          <div class="form-input" style="width: 467px;">
            <input type="tel" style="width: 100%;">
          </div>
        </div>
      </div>
      <div class="market-form-column">
        <div class="form-title">
          <span>이메일주소</span>
        </div>
        <div class="form-contents">
          <div class="form-input" style="width: 467px;">
            <input type="email" style="width: 100%;">
          </div>
        </div>
      </div>
      <div class="market-form-column">
        <div class="form-title">
          <span>대출기관</span>
        </div>
        <div class="form-contents">
          <select style="width: 222px;"><option value="">직접 선택</option></select>
          <div class="form-tag">#일반주담</div>
        </div>
      </div>
      <div class="market-form-column">
        <div class="form-title">
          <span>대출금 / 상환여부</span>
        </div>
        <div class="form-contents">
          <div class="form-input" style="width: 468px;">
            <input type="text" style="width: 100%;">
          </div>
          <select style="width: 222px;"><option value="">직접 선택</option></select>
        </div>
      </div>
      <div class="market-form-column">
        <div class="form-title">
          <span>설정대리인</span>
          <button>정보보기</button>
        </div>
        <div class="form-contents">
          <select style="width: 267px;"><option value="">직접 선택</option></select>
        </div>
      </div>
      <div class="market-form-column">
        <div class="form-title">
          <span>배상책임보험 / 보험료</span>
        </div>
        <div class="form-contents">
          <select style="width: 222px;"><option value="">직접 선택</option></select>
          <div class="form-input read-only" style="width: 345px;">
            <input type="text" style="width: 100%;" readonly>
          </div>
          <p class="form-help-text">보상한도는 이 사건 대출금액과 같습니다</p>
        </div>
      </div>
      <div class="market-form-column">
        <div class="form-title">
          <span>이전대리인</span>
          <button>정보보기</button>
        </div>
        <div class="form-contents">
          <div class="form-input read-only" style="width: 266px;">
            <input type="text" style="width: 100%;" readonly>
          </div>
          <button class="white-button">이전대리인 지정</button>
        </div>
      </div>
      <div class="market-form-column">
        <div class="form-title">
          <span>은행관리번호</span>
        </div>
        <div class="form-contents">
          <div class="form-input" style="width: 468px;">
            <input type="text" style="width: 100%;">
          </div>
        </div>
      </div>
      <div class="market-form-column">
        <div class="form-title">
          <span>상품명</span>
        </div>
        <div class="form-contents">
          <select style="width: 267px;"><option value="">직접 선택</option></select>
        </div>
      </div>
      <div class="market-form-column">
        <div class="form-title">
          <span>전달사항</span>
        </div>
        <div class="form-contents">
          <div class="form-area">
            <textarea ></textarea>
            <p class="area-length">0 / 400</p>
          </div>
        </div>
      </div>
    </div>
    <div class="market-bottom-buttons">
      <div class="bottom-left">
        <button class="button--gray">등록 취소</button>
        <button class="button--blue">저장하기</button>
        <button class="button--darkgray">마켓 의뢰</button>
        <button class="button--black">견척 산출</button>
      </div>
      <button class="button--black">신규등록</button>
    </div>
    <MarketTabs @click-tab="handlerClickTab" />
    <div class="market-tables">
      <DetailCaseChangedTable v-if="tab === 'changed'" />
      <DetailCaseMemoTable v-if="tab === 'memo'" />
      <DetailCaseProcessedTable v-if="tab === 'processed'" />
      <DetailCaseFilesTable v-if="tab === 'files'" />
    </div>
  </div>  
</template>

<script setup>
import { ref } from 'vue'

import MarketTabs from '~/components/tab/MarketTabs.vue'
import DetailCaseChangedTable from '@priros/common/components/table/DetailCaseChangedTable.vue'
import DetailCaseMemoTable from '@priros/common/components/table/DetailCaseMemoTable.vue'
import DetailCaseProcessedTable from '@priros/common/components/table/DetailCaseProcessedTable.vue'
import DetailCaseFilesTable from '@priros/common/components/table/DetailCaseFilesTable.vue'

const tab = ref('changed')
const handlerClickTab = (v) => {
  tab.value = v
}
</script>

<style scoped lang="scss">
@import '~/assets/scss/market/common.scss';
@import '~/assets/scss/market/write.scss';
</style>