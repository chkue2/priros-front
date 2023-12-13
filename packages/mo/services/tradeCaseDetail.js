import {API_URL, GET_AUTH, POST_AUTH, getEndpoint} from "~/composables/useApi.js";

export const tradeCaseDetail = {
  async detail(tradeCaseId) {
    const endpoint = getEndpoint(API_URL.TRADE_CASE_ACCEPT.DETAIL, {trade_case_id: tradeCaseId})
    return await GET_AUTH(endpoint)
  },
  async estimate(tradeCaseId) {
    const endpoint = getEndpoint(API_URL.TRADE_CASE.ESTIMATE, {trade_case_id: tradeCaseId})
    return await GET_AUTH(endpoint)
  },
  async regApplication(tradeCaseId, data) {
    const endpoint = getEndpoint(API_URL.TRADE_CASE.REG_APPLICATION, {trade_case_id: tradeCaseId})
    return await POST_AUTH(endpoint, data)
  },
  async getRegSupplement(tradeCaseId) {
    const endpoint = getEndpoint(API_URL.TRADE_CASE.REG_SUPPLEMENT, {trade_case_id: tradeCaseId})
    return await GET_AUTH(endpoint)
  },
  async setRegSupplement(tradeCaseId, data) {
    const endpoint = getEndpoint(API_URL.TRADE_CASE.REG_SUPPLEMENT, {trade_case_id: tradeCaseId})
    return await POST_AUTH(endpoint, data)
  },
  async contract(tradeCaseId) {
    const endpoint = getEndpoint(API_URL.TRADE_CASE.CONTRACT, {trade_case_id: tradeCaseId})
    return await GET_AUTH(endpoint)
  },
  async mortgage(tradeCaseId) {
    const endpoint = getEndpoint(API_URL.TRADE_CASE.MORTGAGE, {trade_case_id: tradeCaseId})
    return await GET_AUTH(endpoint)
  },
  async register(tradeCaseId) {
    const endpoint = getEndpoint(API_URL.TRADE_CASE.REGISTER, {trade_case_id: tradeCaseId})
    return await GET_AUTH(endpoint)
  },
  async history(tradeCaseId, data) {
    const endpoint = getEndpoint(API_URL.TRADE_CASE.HISTORY, {trade_case_id: tradeCaseId})
    return await GET_AUTH(endpoint, data)
  },
  async historyTr(tradeCaseId, data) {
    const endpoint = getEndpoint(API_URL.TRADE_CASE.HISTORY_TR, {trade_case_id: tradeCaseId})
    return await GET_AUTH(endpoint, data)
  },
  async getMemo(tradeCaseId, data) {
    const endpoint = getEndpoint(API_URL.TRADE_CASE.MEMO, {trade_case_id: tradeCaseId})
    return await GET_AUTH(endpoint, data)
  },
  async setMemo(tradeCaseId, data) {
    const endpoint = getEndpoint(API_URL.TRADE_CASE.MEMO, {trade_case_id: tradeCaseId})
    return await POST_AUTH(endpoint, data)
  },
  async getDocument(tradeCaseId, data) {
    const endpoint = getEndpoint(API_URL.TRADE_CASE.DOCUMENT, {trade_case_id: tradeCaseId})
    return await GET_AUTH(endpoint, data)
  },
  async getDocumentDetail(tradeCaseId, documentId) {
    const endpoint = getEndpoint(API_URL.TRADE_CASE.DOCUMENT_DETAIL, {trade_case_id: tradeCaseId, document_id: documentId})
    return await GET_AUTH(endpoint)
  },
  async getDocumentDownload(tradeCaseId, documentId) {
    const endpoint = getEndpoint(API_URL.TRADE_CASE.DOCUMENT_DOWNLOAD, {trade_case_id: tradeCaseId, document_id: documentId})
    return await GET_AUTH(endpoint)
  },
}