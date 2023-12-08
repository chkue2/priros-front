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
        VERIFY: '/user/verify-password',
        INFO: '/user/info',
    },
    FIRM_INFO: {
        GET: '/firm/info',
        POST: '/firm/info',
        FILE: '/firm/insurance-file'
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
        ESTIMATE: '/tradecases/:trade_case_id/estimate',
        REQUEST: '/tradecases/:trade_case_id/request-report',
        REG_APPLICATION: '/tradecases/:trade_case_id/request-report/registration-application',
        SCHEDULE: '/tradecases/:trade_case_id/schedule',
        CHARGE: '/tradecases/:trade_case_id/charge',
        REPAY: '/tradecases/:trade_case_id/repay',
        REMIT: '/tradecases/:trade_case_id/remit',
        REMIT_REQUEST: '/tradecases/:trade_case_id/remit/request',
        REMIT_AUTH: '/tradecases/:trade_case_id/remit/auth',
        REMIT_AUTH_CHECK: '/tradecases/:trade_case_id/remit/auth/check',
        REG_SUPPLEMENT: '/tradecases/:trade_case_id/regist-supplement',
    },
    TRADE_CASE_ACCEPT: {
        COUNTER: '/tradecases/accept/counter',
        LIST_ALL: '/tradecases/accept',
        LIST_PROGRESS: '/tradecases/accept/progress',
        LIST_RECEIVE: '/tradecases/accept/receive',
        DETAIL: '/tradecases/accept/:trade_case_id'
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