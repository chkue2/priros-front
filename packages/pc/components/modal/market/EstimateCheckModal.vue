<template>
  <CommonHeaderModal modal-id="estimateCheckModal" modal-title="견적확인" width="1168px">
    <div class="estimate-container">
      <div class="estimate-toggle-top">
        <div class="toggle-top-title">
          <span class="title-left">견적 요약 정보</span>
          <i class="title-right">5,970,192 원</i>
        </div>
        <img src="/img/icon/expand-down-gray.svg" alt>
      </div>
      <div class="estimate-toggle-bottom toggle-grid">
        <div class="grid-header">등기비용</div>
        <div class="grid-contents grid-5">5,970,192 원</div>
        <div class="grid-header">입급계좌</div>
        <div class="grid-contents">123-456-123456</div>
        <div class="grid-header">대출기관</div>
        <div class="grid-contents grid-gray">경남은행</div>
        <div class="grid-header">대출금</div>
        <div class="grid-contents grid-gray">100,000,000 원</div>
        <div class="grid-header">대출실행금</div>
        <div class="grid-contents grid-gray">100,000,000 원</div>
        <div class="grid-contents grid-9 grid-end grid-gap-20">
          <b>견적발행일</b>
          <span>2023-10-19</span>
        </div>
      </div>
      <div class="estimate-help">
        <span>• 등기비용 : 제세공과금 + 수수료</span>
        <span>• 대출실행금 : 대출기관 기준에 따름</span>
      </div>
      <div class="estimate-receipt-container">
        <div class="receipt">
          <div class="estimate-toggle-top">
            <div class="toggle-top-title">
              <span class="title-left">사건 정보</span>
            </div>
            <div class="toggle-top-icon">
              <img src="/img/icon/expand-down-gray.svg" alt>
            </div>
          </div>
          <div class="estimate-toggle-bottom receipt-contents">
            <div class="receipt-top">
              <p class="top-title">목적물</p>
              <p class="top-content">경상남도 창원시 마산합포구 월영동 736 월영에스케이오션뷰 제 104동 제 1805호</p>
            </div>
            <div class="receipt-body">
              <div class="body-column">
                <p class="body-title">매수인</p>
                <p class="body-content">김종석,최은경</p>
              </div>
              <div class="body-column">
                <p class="body-title">산출조건</p>
                <p class="body-content">조정대상지역-1주택</p>
              </div>
              <div class="body-column">
                <p class="body-title">농특세</p>
                <p class="body-content">비과세</p>
              </div>
              <div class="body-column">
                <p class="body-title">매매대금</p>
                <p class="body-content">110,000,000 원</p>
              </div>
              <div class="body-column">
                <p class="body-title">시가표준액</p>
                <p class="body-content">400,000,000 원</p>
              </div>
              <div class="body-column">
                <p class="body-title">채권매입금</p>
                <p class="body-content">8,400,000 원</p>
              </div>
            </div>
          </div>
        </div>
        <div class="receipt">
          <div class="estimate-toggle-top">
            <div class="toggle-top-title">
              <span class="title-left">사건 정보</span>
            </div>
            <div class="toggle-top-icon">
              <span>5,507,092 원</span>
              <img src="/img/icon/expand-down-gray.svg" alt>
            </div>
          </div>
          <div class="estimate-toggle-bottom receipt-contents">
            <div class="receipt-body">
              <div class="body-column">
                <p class="body-title">취득세</p>
                <p class="body-content">4,000,000 원</p>
              </div>
              <div class="body-column">
                <p class="body-title">지방교육세</p>
                <p class="body-content">400,000 원</p>
              </div>
              <div class="body-column">
                <p class="body-title">농특세</p>
                <p class="body-content">0 원</p>
              </div>
              <div class="body-column">
                <p class="body-title">인지</p>
                <p class="body-content">150,000 원</p>
              </div>
              <div class="body-column">
                <p class="body-title">중지</p>
                <p class="body-content">13,000 원</p>
              </div>
              <div class="body-column">
                <p class="body-title">채권부담금</p>
                <p class="body-content">944,092 원</p>
              </div>
            </div>
            <div class="receipt-bottom">
              <p class="bottom-title">소계</p>
              <p class="bottom-content">5,507,092 원</p>
            </div>
          </div>
        </div>
        <div class="receipt">
          <div class="estimate-toggle-top">
            <div class="toggle-top-title">
              <span class="title-left">수수료</span>
            </div>
            <div class="toggle-top-icon">
              <span>463,100 원</span>
              <img src="/img/icon/expand-down-gray.svg" alt>
            </div>
          </div>
          <div class="estimate-toggle-bottom receipt-contents">
            <div class="receipt-body">
              <div class="body-column">
                <p class="body-title">적용수수료</p>
                <p class="body-content">381,000 원</p>
              </div>
              <div class="body-column">
                <p class="body-title">거래신고대행</p>
                <p class="body-content">40,000 원</p>
              </div>
              <div class="body-column">
                <p class="body-title">대중매매</p>
                <p class="body-content">0 원</p>
              </div>
              <div class="body-column">
                <p class="body-title">수수료계</p>
                <p class="body-content">421,000 원</p>
              </div>
              <div class="body-column">
                <p class="body-title">부가세</p>
                <p class="body-content">42,100 원</p>
              </div>
            </div>
            <div class="receipt-bottom">
              <p class="bottom-title">소계</p>
              <p class="bottom-content">463,100 원</p>
            </div>
          </div>
        </div>
      </div>
      <p class="extimate-receipt-help">
        기본 법정수수료(소계) : 642,400원 (VAT포함)
      </p>
      <div class="estimate-toggle-top">
        <div class="toggle-top-title">
          <span class="title-left">견적서 안내문</span>
        </div>
        <img src="/img/icon/expand-down-gray.svg" alt>
      </div>
      <div class="estimate-toggle-bottom toggle-area">
        ※ 준비서류 ※ <br><br>
        - 매매계약서 원본 <br>
        - 주민등록초본 각 1통 (주소변동내역 포함, 주민등록번호 공개) <br>
        - 주민등록등본 각 1통 (주소변동내역 포함, 주민등록번호 공개) <br>
        - 가족관계증명서 각 1통 (상세증명서) <br>
        - 도장 <br>
        - 신분증 <br><br>
        ※ 국민주택채권 매입부담금은 매입일의 할인율에 따라 소폭의 가감이 있을 수 있습니다 ※
      </div>
      <div class="estimate-help">
        <span>다이렉트로 법무사 (견적담당자 : 김프리 )<br>T. 02-453-7896</span>
      </div>
      <div class="estimate-button">
        <button>화면인쇄</button>
      </div>
    </div>
  </CommonHeaderModal>
</template>

<script setup>
import CommonHeaderModal from '~/components/modal/CommonHeaderModal.vue'
</script>

<style scoped lang="scss">
.estimate-container {
  padding: 45px 25px;
}
.estimate-toggle-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 11px 14px;
  background-color: #f2f2f2;
  .toggle-top-title {
    display: flex;
    gap: 20px;
    .title-left {
      font-size: 18px;
      font-weight: $ft-semibold;
    }
    .title-right {
      font-size: 18px;
    }
  }
  .toggle-top-icon {
    display: flex;
    gap: 20px;
    align-items: center;
    & > span {
      font-size: 14px;
    }
    & > img {
      margin-bottom: 4px;
    }
  }
}
.toggle-grid {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  .grid-header {
    grid-column: 1 span;
    min-height: 85px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f9f9f9;
    font-weight: $ft-semibold;
    border-bottom: 1px solid #ebebeb;
  }
  .grid-contents {
    grid-column: 2 span;
    display: flex;
    align-items: center;
    padding: 0 15px;
    font-weight: $ft-medium;
    border-bottom: 1px solid #ebebeb;
    min-height: 50px;
    &.grid-gray {
      color: #6f6f6f;
    }
    &.grid-5 {
      grid-column: 5 span;
    }
    &.grid-9 {
      grid-column: 9 span;
    }
    &.grid-end {
      justify-content: flex-end;
    }
    &.grid-gap-20 {
      gap: 20px;
    }
  }
}
.estimate-help {
  display: flex;
  align-items: center;
  margin: 10px 0 60px;
  font-size: 14px;
  font-weight: $ft-medium;
  color: #6f6f6f;
  gap: 30px;
}
.estimate-receipt-container {
  padding: 0 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 44px;
  .receipt {
    box-shadow: 0px 4px 10px 0px #00000026;
  }
  .receipt-contents {
    padding: 33px 25px 55px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 336px;
    .receipt-top {
      .top-title {
        padding-bottom: 8px;
        margin-bottom: 8px;
        font-size: 12px;
        color: #6d7278;
        border-bottom: 1px dotted #979797;
      }
      .top-content {
        font-size: 12px;
        font-weight: $ft-medium;
        line-height: 20px;
      }
    }
    .receipt-body {
      display: flex;
      flex-direction: column;
      gap: 6px;
      padding: 30px 0;
      .body-column {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .body-title {
        font-size: 14px;
        color: #637278;
        line-height: 20px;
      }
      .body-content {
        font-size: 14px;
        text-align: right;
        line-height: 20px;
      }
    }
    .receipt-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 12px;
      border-top: 1px dotted #979797;
      .bottom-title {
        font-size: 14px;
        line-height: 20px;
      }
      .bottom-content {
        font-size: 14px;
        font-weight: $ft-bold;
      }
    }
  }
}
.extimate-receipt-help {
  margin: 22px 0 35px;
  padding: 0 50px;
  text-align: right;
  font-size: 14px;
  font-weight: $ft-medium;
  color: #6f6f6f;
}
.toggle-area {
  padding: 35px 14px 20px;
  border-bottom: 1px solid #ebebeb;
  font-weight: $ft-medium;
  line-height: 20px;
}
.estimate-button {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  & > button {
    width: 173px;
    height: 44px;
    border-radius: 4px;
    background-color: #000000;
    border: none;
    font-size: 16px;
    font-weight: $ft-medium;
    color: #ffffff;
    cursor: pointer;
  }
}
</style>