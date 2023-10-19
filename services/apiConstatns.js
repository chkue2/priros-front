/*
* 기본 RULE
* LIST      목록
* GET       단일
* UPDATE    수정
* CREATE    등록
* REMOVE    삭제
*
* */


const API_TRADE_CASE = {
    LIST: '/market/',
};
const API_TRADE_CASE_CHARGER = {
    LIST:   '/trade-case/$tradeCaseId/charge',
    REPORT: '/trade-case/$tradeCaseId/charge',
    STATE:  '/trade-case/$tradeCaseId/charge/state'
}


export {
    API_TRADE_CASE,
    API_TRADE_CASE_CHARGER
};