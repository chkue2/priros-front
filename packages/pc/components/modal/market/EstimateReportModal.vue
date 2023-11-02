<template>
  <CommonHeaderModal modal-id="estimateReportModal" modal-title="등기비용" width="1168px">
    <div class="estimate-container">
      <div class="estimate-grid">
        <div class="grid-top grid-12">
          사건정보
          <select><option value="">0: 산출이력이 없습니다</option></select>
        </div>
        <div class="grid-header">목적물</div>
        <div class="grid-contents grid-7">서울시 서초구 신반포로 270</div>
        <div class="grid-header">매수인</div>
        <div class="grid-contents">유재석</div>
        <div class="grid-header">산출조건</div>
        <div class="grid-contents"><select><option value="">산출조건 선택</option></select></div>
        <div class="grid-header">농특세</div>
        <div class="grid-contents"><select><option value="">농특세 선택</option></select></div>
        <div class="grid-header">대출기관<br>(대출금액)</div>
        <div class="grid-contents">케이뱅크 (500,000,000)</div>
        <div class="grid-header">매매대금</div>
        <div class="grid-contents"><input type="text" readonly placeholder="0"></div>
        <div class="grid-header">시가<br>표준액</div>
        <div class="grid-contents"><input type="text" placeholder="여기를 클릭하여 계산하세요" class="text-input"></div>
        <div class="grid-header">채권부담율<br>(%)</div>
        <div class="grid-contents">
          <input type="date" > <span class="estimate-percent">15,4488</span>
        </div>
      </div>
      <div class="estimate-calc">
        <p class="calc-help-text">
          <span>직거래</span> 해당 사건은 매도인, 매수인의 직거래 계약입니다. 신고기간 내에 부동산거래신고가 이행되도록 반드시 챙겨주세요.
        </p>
        <button class="calc-button">계산하기</button>
      </div>
      <div class="estimate-grid">
        <div class="grid-top grid-4">제세공과금</div>
        <div class="grid-top grid-4">수수료 <span class="ft-small">법정수수료는 0원입니다.</span></div>
        <div class="grid-top grid-4">설정비용</div>
        <div class="grid-header">(취)등록세</div>
        <div class="grid-contents"><input type="text" placeholder="0"></div>
        <div class="grid-header">적용수수료</div>
        <div class="grid-contents"><input type="text" placeholder="0"></div>
        <div class="grid-header">대출설정<br>인지</div>
        <div class="grid-contents"><input type="text" placeholder="0"></div>
        <div class="grid-header">지방<br>교육세</div>
        <div class="grid-contents"><input type="text" placeholder="0"></div>
        <div class="grid-header">거래신고<br>대행</div>
        <div class="grid-contents"><input type="text" placeholder="0"></div>
        <div class="grid-header">대출설정<br>채권</div>
        <div class="grid-contents"><input type="text" placeholder="0"></div>
        <div class="grid-header">농특세</div>
        <div class="grid-contents"><input type="text" placeholder="0"></div>
        <div class="grid-header">다중매매</div>
        <div class="grid-contents"><input type="text" placeholder="0"></div>
        <div class="grid-header">소계</div>
        <div class="grid-contents"><input type="text" placeholder="0"></div>
        <div class="grid-header">인지</div>
        <div class="grid-contents"><input type="text" placeholder="0"></div>
        <div class="grid-header">수수료계</div>
        <div class="grid-contents grid-7"><input type="text" readonly placeholder="0"></div>
        <div class="grid-header">중지</div>
        <div class="grid-contents"><input type="text" placeholder="0"></div>
        <div class="grid-header">부가세</div>
        <div class="grid-contents grid-7"><input type="text" readonly placeholder="0"></div>
        <div class="grid-header">채권매입금/<br>채권부담금</div>
        <div class="grid-contents contents-half">
          <input type="text" placeholder="0">
          <input type="text" placeholder="0">
        </div>
        <div class="grid-header">소계</div>
        <div class="grid-contents grid-7"><input type="text" readonly placeholder="0"></div>
        <div class="grid-header">소계</div>
        <div class="grid-contents grid-11"><input type="text" readonly placeholder="0"></div>
      </div>
      <div class="estimate-grid bt">
        <div class="grid-header">총 합계</div>
        <div class="grid-contents grid-7">
          <input type="text" readonly placeholder="0">
          <button class="apply-button">합계 적용하기</button>
        </div>
        <div class="grid-header">대출실행금</div>
        <div class="grid-contents"><input type="text" readonly placeholder="0"></div>
      </div>
      <div class="save-button">
        <button>견적 저장</button>
      </div>
    </div>
  </CommonHeaderModal>
</template>

<script setup>
import CommonHeaderModal from '~/components/modal/CommonHeaderModal.vue'
</script>

<style scoped lang="scss">
.estimate-container {
  padding: 25px 25px 65px;
}
.estimate-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  & + .estimate-grid {
    margin-top: 32px;
  }
  &.bt {
    border-top: 1px solid #ebebeb;
  }
}
.grid-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: $ft-semibold;
  padding-bottom: 13px;
  border-bottom: 1px solid #ebebeb;
  & > select {
    width: 267px;
    height: 45px;
    border: 1px solid #bebebe;
    padding: 0 12px;
    border-radius: 6px;
  }
  .ft-small {
    font-size: 14px;
    line-height: 19px;
    margin-right: 12px;
    font-weight: $ft-regular;
  }
}
.grid-12 {
  grid-column: 12 span;
}
.grid-4 {
  grid-column: 4 span;
}
.grid-header {
  grid-column: 1 span;
  min-height: 85px;
  background-color: #f9f9f9;
  font-weight: $ft-semibold;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ebebeb;
  text-align: center;
  line-height: 22px;
}
.grid-contents {
  grid-column: 3 span;
  padding-left: 12px;
  display: flex;
  align-items: center ;
  gap: 5px;
  border-bottom: 1px solid #ebebeb;
  &.grid-7 {
    grid-column: 7 span;
  }
  &.grid-11 {
    grid-column: 11 span;
  }
  & > select {
    width: 251px;
    height: 58px;
    border: 1px solid #bebebe;
    padding: 0 12px;
    font-size: 16px;
  }
  & > input[type=text] {
    width: 251px;
    height: 58px;
    padding: 0 12px;
    text-align: right;
    font-size: 16px;
    border: 1px solid #bebebe;
    &:read-only {
      background-color: #f0f0f0;
    }
    &.text-input {
      text-align: left;
    }
  }
  & > input[type=date] {
    width: 161px;
    height: 58px;
    padding: 0 12px;
    text-align: left;
    font-size: 16px;
    border: 1px solid #bebebe;
  }
  &.contents-half {
    & > input[type=text] {
      width: 123px;
    }
  }
  .estimate-percent {
    padding: 8px;
    border: 1px solid #235bed;
    color: #235bed;
    margin-left: 5px;
  }
  .apply-button {
    width: 173px;
    height: 44px;
    background-color: #000000;
    border-radius: 4px;
    font-size: 16px;
    font-weight: $ft-bold;
    color: #ffffff;
    border: none;
    cursor: pointer;
    margin-left: 10px;
  }
}
.estimate-calc {
  margin: 23px 0 70px;
  position: relative;
  text-align: right;
  .calc-help-text {
    display: flex;
    align-items: center;
    gap: 4px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    & > span {
      background-color: rgba(255, 59, 59, 0.1);
      color: #e92c2c;
      padding: 3px 4px;
      border-radius: 4px;
      font-size: 14px;
    }
  }
  .calc-button {
    width: 200px;
    height: 44px;
    background-color: #000000;
    border-radius: 4px;
    font-size: 16px;
    font-weight: $ft-bold;
    color: #ffffff;
    border: none;
    cursor: pointer;
  }
}
.save-button {
  margin-top: 46px;
  display: flex;
  justify-content: flex-end;
  & > button {
    width: 173px;
    height: 44px;
    background-color: #989898;
    border-radius: 4px;
    font-size: 16px;
    font-weight: $ft-bold;
    color: #ffffff;
    border: none;
    cursor: pointer;
  }
}
</style>