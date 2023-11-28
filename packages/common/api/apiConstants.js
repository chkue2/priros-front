/*
* 기본 RULE
* LIST      목록
* GET       단일
* UPDATE    수정
* CREATE    등록
* REMOVE    삭제
*
* */

const API_URL = {
    AUTH: {
        LOGIN: '/auth/login',
        LOGOUT: '/auth/logout',
        REFRESH: '/auth/refresh',
    },
    USER: {
        VERIFY: '/user/verify-password'
    },
    JOIN: {
        EXPERT: '/join-firm'
    },
    INTRO: {
        GET: '/intro'
    },
    NOTICE: {
        LIST: '/notice/list'
    },
    FAQ: {
        LIST: '/faq/list'
    },
    TASK: {
        REGIST: '/task/regist-info',
        BOND: '/task/bond-discount-rate'
    },
    TRADE_CASE: {
        ESTIMATE: '/tradecases/:trade_case_id/estimate'
    },
    TRADE_CASE_ACCEPT: {
        COUNTER: '/tradecases/accept/counter',
        LIST_ALL: '/tradecases/accept',
        LIST_PROGRESS: '/tradecases/accept/progress',
        LIST_RECEIVE: '/tradecases/accept/receive',
        DETAIL: '/tradecases/accept/:trade_case_id'
    },
    TRADE_CASE_SCHEDULE_REPORT: {
        GET: '/tradecases/:trade_case_id/schedule',
        POST: '/tradecases/:trade_case_id/schedule',
    },
    TRADE_CASE_CHARGE_REPORT: {
        GET: '/tradecases/:trade_case_id/charge',
        POST: '/tradecases/:trade_case_id/charge',
    },
    TRADE_CASE_CHARGER: {
        LIST: '/trade-case/:trade_case_id/charge',
        REPORT: '/trade-case/:trade_case_id/charge',
        STATE: '/trade-case/:trade_case_id/charge/state'
    },
    TRADE_DETAIL_CASE: {
        GET: '/trade-case/:trade_case_id/detail',
        CHANGED: '/trade-case/:trade_case_id/changed',
        MEMO: '/trade-case/:trade_case_id/memo',
        PROCESSED: '/trade-case/:trade_case_id/proceessed',
        FILES: '/trade-case/:trade_case_id/files'
    }
};

export default API_URL;