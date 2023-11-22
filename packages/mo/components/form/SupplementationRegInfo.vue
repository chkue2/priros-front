<template>
  <div class="supplementation-container">
    <div class="dialog-wrapper">
      <div class="container">
        <div class="inner-body">
          <div class="forms">
            <div class="form-group">
              <div class="label">
                <label for="" class="form-label">첨부파일</label>
              </div>
              <div class="form-input">
                <input type="file">
                <p class="input-file">파일을 첨부해주세요 (최대 5개) <img src="/img/icon/file-gray.png" alt=""></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="supplementation-help-text">
      등기필정보 보완요청을 받은 경우에는<br>모든 매수인의 등기필정보를 등록해야 합니다.
    </p>
  </div>
</template>

<style scoped lang="scss">
@import '@priros/common/assets/scss/views/dialog';
.supplementation-container {
  padding: 42px 4px;
  .dialog-wrapper {
    min-height: unset;
  }
}
.supplementation-help-text{
  padding: 38px 0 60px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  line-height: 20px;
}
</style>