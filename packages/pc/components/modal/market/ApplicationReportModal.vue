<template>
  <CommonHeaderModal modal-id="applicationReportModal" modal-title="신청정보 보고" width="420px">
    <div class="report-container">
      <span class="report-tag">신청정보보고 전 확인</span>
      <p class="report-intro-text">
        매도인의 주소경정등기 누락은<br>등기취하 및 재접수가 필요한 중요사항입니다.
      </p>
      <p class="report-form-title">등기신청서 작성정보</p>
      <textarea class="report-area" placeholder="등기신청서 작성 ID 및 작성번호를 입력하세요 (매도인별 식별번호 뒷자리 입력으로 대체 가능)"></textarea>
      <div class="report-form-title mt-20">
        매수인별 취득지분
        <div class="form-title-radio">
          <label>
            <input type="radio" name="radio1">
            <span>단독명의</span>
          </label>
          <label>
            <input type="radio" name="radio1">
            <span>공동명의</span>
          </label>
        </div>
      </div>
      <textarea class="report-area" placeholder="매수인별로 이름과 취득지분을 입력하세요 (균분일 경우 생략가능)"></textarea>
      <div class="report-form-title mt-20">
        매수인 주소변동
        <div class="form-title-radio">
          <label>
            <input type="radio" name="radio2">
            <span>동일</span>
          </label>
          <label>
            <input type="radio" name="radio2">
            <span>변동발생</span>
          </label>
        </div>
      </div>
      <div class="form-input">
        <input type="file">
        <p class="input-file">
          매수인의 주민등록초본을 첨부하세요 <img src="/img/icon/file-gray.png">
        </p>
      </div>
      <div class="report-form-title mt-20">
        기타사항
      </div>
      <textarea class="report-area" placeholder="설정대리인에게 전달할 내용을 입력하세요"></textarea>
      <div class="report-button">
        <button>수정하기</button>
      </div>
    </div>
  </CommonHeaderModal>
</template>

<script setup>
import CommonHeaderModal from '~/components/modal/CommonHeaderModal.vue'
</script>

<style scoped lang="scss">
@import '~/assets/scss/market/report.scss';
</style>