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
        REFRESH: '/auth/refresh'
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
    TRADE_CASE: {
        LIST_ALL: '/tradecases/accept',
        LIST_PROGRESS: '/tradecases/accept/progress',
        LIST_RECEIVE: '/tradecases/accept/receive',
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