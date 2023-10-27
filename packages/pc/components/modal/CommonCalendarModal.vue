<template>
  <CommonHeaderModal modal-id="commonCalendarModal" modal-title="달력보기" width="1248px">
    <div class="calendar-container">
      <div class="calendar-wrapper">
        <FullCalendar :options="calendarOptions" />
        <div class="calendar-selectes">
          <select><option value="">의뢰</option></select>
          <select><option value="">진행</option></select>
        </div>
      </div>
      <div class="calendar-list">
        <div class="calendar-list-tabs">
          <span class="calendar-list-tab active">All <i>23</i></span>
          <span class="calendar-list-tab">할 일 <i>23</i></span>
          <span class="calendar-list-tab">진행중 <i>23</i></span>
        </div>
        <div class="calendar-list-wrapper">
          <p class="calendar-list-title">2023년 10월 27일 (금)</p>
          <div class="calendar-list-container">
            <div class="calendar-list-column">
              <div v-for="i in 5" :key="i" class="calendar-list-item">
                <p class="calendar-list-item-title title--red">09:00 서울 서대문구 N (오영광)</p>
                <img src="/img/icon/expand-right-gray.svg">
              </div>
            </div>
          </div>
          <div class="calendar-list-container">
            <div class="calendar-list-column">
              <div v-for="i in 18" :key="i" class="calendar-list-item">
                <p class="calendar-list-item-title title--green">09:00 서울 서대문구 N (오영광)</p>
                <img src="/img/icon/expand-right-gray.svg">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </CommonHeaderModal>
</template>

<script setup>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'

import CommonHeaderModal from '~/components/modal/CommonHeaderModal.vue'

const calendarOptions = {
  plugins: [dayGridPlugin],
  initialView: 'dayGridMonth',
  locale: 'ko',
  displayEventTime: false,
  defaultAllDay: true,
  headerToolbar: {
    start: '',
    center: 'prev,title,next,today',
    end: '',
  },
  events: [
    {title: '업무지연+20', start: '2023-10-27', backgroundColor: 'rgba(255, 59, 59, 0.1)', borderColor: 'rgba(255, 59, 59, 0.1)', textColor: '#E92C2C'},
    {title: '진행중+18', start: '2023-10-27', backgroundColor: 'rgba(0, 186, 52, 0.1)', borderColor: 'rgba(0, 186, 52, 0.1)', textColor: '#00BA34'},
  ],
  eventClick: function(info){
    info.jsEvent.preventDefault()
    console.log(changeDateFormat(new Date(info.event.start)))
  }
}

const changeDateFormat = (date) => {
  const year = date.getFullYear()
  const month = leftPad(date.getMonth() + 1)
  const day = leftPad(date.getDate())

  return [year, month, day].join('-')
}

const leftPad = (num) => {
  if(typeof num !== 'number') num = parseInt(num)
  
  return num >= 10 ? num : `0${num}`
}

</script>

<style scoped lang="scss">
.calendar-container {
  display: flex;
  height: calc(100% - 73px);
}
.calendar-wrapper {
  flex: 1;
  padding: 34px;
  position: relative;
  &::v-deep(.fc-toolbar-chunk > div) {
    display: flex;
    align-items: center;
    .fc-prev-button,
    .fc-next-button { 
      width: 24px;
      height: 24px;
      padding: 0;
    }
    .fc-today-button {
      margin-left: 8px;
      padding: 0 4px;
    }
  }
  &::v-deep(.fc-toolbar-title) {
    font-size: 20px;
    font-weight: $ft-bold;
    color: #1a1a1a;
    margin: 0 15px;
  }
  &::v-deep(.fc-daygrid-event-harness){
    cursor: pointer;
  }
  .calendar-selectes {
    display: flex;
    gap: 15px;
    position:absolute;
    top: 30px;
    left: 30px;
    & > select {
      width: 86px;
      height: 36px;
      padding-left: 12px;
      border: 1px solid #bebebe;
      border-radius: 6px;
      font-size: 14px;
      color: #6f6f6f;
      appearance: none;
      background-image: url(/img/icon/expand-down-gray.svg);
      background-repeat: no-repeat;
      background-position-y: center;
      background-position-x: calc(100% - 12px);
    }
  }
}
.calendar-list {
  width: 428px;
  max-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  border-left: 1px solid #e6e6e6;
  .calendar-list-tabs {
    display: flex;
    padding: 0 30px;
    border-bottom: 2px solid #e6e6e6;
    gap: 12px;
    position: sticky;
    top: 0;
    background-color: #ffffff;
    z-index: $zi-sticky;
    .calendar-list-tab {
      height: 50px;
      display: inline-flex;
      gap: 8px;
      align-items: flex-end;
      justify-content: center;
      padding-bottom: 4px;
      position: relative;
      cursor: pointer;
      &.active {
        &::after {
          content :'';
          width: 100%;
          height: 2px;
          background-color: #0085ff;
          position: absolute;
          bottom: -2px;
        }
        & > i {
          background-color: #0085ff;
          color: #ffffff;
          border: none;
        }
        color: #0085ff;
      }
      & > i {
        border-radius: 96px;
        display: inline-flex;
        padding: 4px;
        justify-content: center;
        align-items: center;
        font-size: 10px;
        font-style: normal;
        margin-bottom: 2px;
        border: 1px solid #e8e8e8;
        background-color: #f6f6f6;
        font-weight: $ft-semibold;
      }
    }
  }
  .calendar-list-wrapper{
    padding: 18px 23px;
    .calendar-list-title {
      font-size: 14px;
      font-weight: $ft-bold;
      line-height: 30px;
      margin-bottom: 5px;
    }
  }
  .calendar-list-container + .calendar-list-container {
    margin-top: 30px;
  }
  .calendar-list-column {
    display: flex;
    flex-direction: column;
    gap: 5px;
    .calendar-list-item {
      height: 33px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 12px;
      background-color: #f2f2f2;
      font-size: 14px;
      .calendar-list-item-title {
        display: flex;
        align-items: center;
        gap: 5px;
        &::before {
          content: '';
          width: 9px;
          height: 9px;
          border-radius: 50%;
        }
        &.title--red::before {
          background-color: #E92C2C;
        }
        &.title--green::before {
          background-color: #00BA34;
        }
      }
      & > img {
        width: 8px;
      }
    }
  }
}
</style>