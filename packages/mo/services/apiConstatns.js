/*
* 기본 RULE
* LIST      목록
* GET       단일
* UPDATE    수정
* CREATE    등록
* REMOVE    삭제
*
* */

const API_INTRO = {
  GET: '/intro'
}
const API_NOTICE = {
  LIST: '/notice/list'
}
const API_FAQ = { 
  LIST: '/faq/list'
}
const API_TRADE_CASE = {
  LIST: '/market/',
};
const API_TRADE_CASE_CHARGER = {
  LIST:   '/trade-case/$tradeCaseId/charge',
  REPORT: '/trade-case/$tradeCaseId/charge',
  STATE:  '/trade-case/$tradeCaseId/charge/state'
}
const API_TRADE_DETAIL_CASE = {
  GET: '/trade-case/$tradeCaseId/detail',
  CHANGED: '/trade-case/$tradeCaseId/changed',
  MEMO: '/trade-case/$tradeCaseId/memo',
  PROCESSED: '/trade-case/$tradeCaseId/proceessed',
  FILES: '/trade-case/$tradeCaseId/files'
}


export {
  API_INTRO,
  API_NOTICE,
  API_FAQ,
  API_TRADE_CASE,
  API_TRADE_CASE_CHARGER,
  API_TRADE_DETAIL_CASE
};