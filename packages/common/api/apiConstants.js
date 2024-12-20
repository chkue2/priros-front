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
    LOGIN: "/auth/login",
    LOGOUT: "/auth/logout",
    REFRESH: "/auth/refresh",
  },
  USER: {
    VERIFY: "/user/verify-password",
    INFO: "/user/info",
    FIND_ID: "/user/findId",
    FIND_PW: "/user/findPw",
    PROFILE_SEND: "/firm/profile-send",
    LEAVE: "/user/leave",
  },
  NICE: {
    CHECK_PHONE: "/nice/check-phone/v2",
    DECRYPT: "/nice/decrypt",
  },
  FIRM_INFO: {
    GET: "/firm/info",
    POST: "/firm/info",
    FILE: "/firm/insurance-file",
  },
  JOIN: {
    EXPERT: "/firm/join-firm",
    CHECK_ID: "/firm/join-firm-check-id",
  },
  INTRO: {
    GET: "/intro",
  },
  NOTICE: {
    LIST: "/notice/list",
  },
  FAQ: {
    LIST: "/faq/list",
  },
  TASK: {
    REGIST: "/task/regist-info",
    BOND: "/task/bond-discount-rate",
  },
  TRADE_CASE: {
    ESTIMATE: "/tradecases/:trade_case_id/estimate",
    REQUEST: "/tradecases/:trade_case_id/request-report",
    REG_APPLICATION:
      "/tradecases/:trade_case_id/request-report/registration-application",
    SCHEDULE: "/tradecases/:trade_case_id/schedule",
    CHARGE: "/tradecases/:trade_case_id/charge",
    REPAY: "/tradecases/:trade_case_id/repay",
    REMIT: "/tradecases/:trade_case_id/remit",
    REMIT_REQUEST: "/tradecases/:trade_case_id/remit/request",
    REMIT_AUTH: "/tradecases/:trade_case_id/remit/auth",
    REMIT_AUTH_CHECK: "/tradecases/:trade_case_id/remit/auth/check",
    REMIT_REQUEST_KAKAO: "/tradecases/:trade_case_id/remit/request/kakao",
    REG_SUPPLEMENT: "/tradecases/:trade_case_id/regist-supplement",
    CONTRACT: "/tradecases/:trade_case_id/contract",
    RECEIVE: "/tradecases/:trade_case_id/receive",
    MORTGAGE: "/tradecases/:trade_case_id/firm/mortgage",
    REGISTER: "/tradecases/:trade_case_id/firm/register",
    HISTORY: "/tradecases/:trade_case_id/history",
    HISTORY_TR: "/tradecases/:trade_case_id/history/tr",
    MEMO: "/tradecases/:trade_case_id/memo",
    MEMO_DELETE: "/tradecases/:trade_case_id/memo/:memo_id",
    DOCUMENT: "/tradecases/:trade_case_id/document",
    DOCUMENT_DETAIL: "/tradecases/:trade_case_id/document/:document_id",
    DOCUMENT_DOWNLOAD:
      "/tradecases/:trade_case_id/document/:document_id/download",
  },
  TRADE_CASE_ACCEPT: {
    COUNTER: "/tradecases/accept/counter",
    LIST_ALL: "/tradecases/accept",
    LIST_PROGRESS: "/tradecases/accept/progress",
    LIST_RECEIVE: "/tradecases/accept/receive",
    DETAIL: "/tradecases/accept/:trade_case_id",
  },
  TRADE_CASE_CHARGER: {
    LIST: "/trade-case/:trade_case_id/charge",
    REPORT: "/trade-case/:trade_case_id/charge",
    STATE: "/trade-case/:trade_case_id/charge/state",
  },
  TRADE_DETAIL_CASE: {
    GET: "/trade-case/:trade_case_id/detail",
    CHANGED: "/trade-case/:trade_case_id/changed",
    MEMO: "/trade-case/:trade_case_id/memo",
    PROCESSED: "/trade-case/:trade_case_id/proceessed",
    FILES: "/trade-case/:trade_case_id/files",
  },
  REVENUE_STAMP: {
    GENERATE_TRADECASE: "/revenue-stamp/generate/tradeCase",
    GENERATE_POPUP_INPO: "/revenue-stamp/generate/popupInfo",
  },
};

export default API_URL;
