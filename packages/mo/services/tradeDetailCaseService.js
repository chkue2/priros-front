import {callApi, getEndpoint} from "~/composables/useApi.js";
import {API_TRADE_DETAIL_CASE} from "./apiConstatns.js";

export const tradeDetailCaseService = {
  async get(tradeCaseId) {
    // const endpoint = getEndpoint(API_TRADE_DETAIL_CASE.GET, {tradeCaseId: tradeCaseId});
    // return await callApi(endpoint);
    
    let data
    data = {
      state: '견적보고',
      charge: '조성화',
      visitCharge: '다이렉트로 오택상TL',
      balanceDate: '2023-09-10 11:21:00',
      receptionDate: '2023-09-01',
      receptionUid: '1234-f1',
      status: [
        {
          title: '담당자 보고',
          state: '완료',
        },
        {
          title: '일정 보고',
          state: '대기',
        },
        {
          title: '송금요청',
          state: '대기',
        },
        {
          title: '신청정보보고',
          state: '완료',
        },
        {
          title: '상환보고',
          state: '대기',
        },
        {
          title: '접수보고',
          state: '대기',
        },
      ],
      address: '경기도 과천시 갈현동 135 과천 푸르지오 벨라르테 103단지 1310호',
      competentRegOffice: '수원지방법원 안양지원 안양등기소',
      salesContract: '/img/case/contract.png',
      salesPrice: 875000000,
      repaymentStatus: 'Y',
      buyer: '유재석',
      phone: '010-1234-1234',
      email: '',
      lendingBank: '카카오뱅크',
      lendingName: '일반주담대',
      lendingAmount: 250000000,
      estaAgent: {
        name: '일박이일법무소',
        representative: '조성화',
        address: '경기도 과천시 별양상가 1로 18, 4층 B-2호 (별양동, 과천오피스텔)',
        agentTel: '010-1234-1234',
        charge: '김프리 법무사',
        chargeTel: '010-4567-4567'
      },
      regAuth: {
        name: '국민은행',
        representative: '김국민',
        address: '경기도 과천시 국민1로 11, 1층 (국민은행)',
        agentTel: '031-110-1234',
        charge: '최민국 대리',
        chargeTel: '031-110-2345'
      },
      liabilityInsurance: 'Y',
      insurnaceFee: 15000,
    }

    return { data }
  },
  async changed(tradeCaseId) {
    // const endpoint = getEndpoint(API_TRADE_DETAIL_CASE.CHANGED, {tradeCaseId: tradeCaseId});
    // return await callApi(endpoint);

    let data = []
    return { data }
  },
  async memo(tradeCaseId) {
    // const endpoint = getEndpoint(API_TRADE_DETAIL_CASE.MEMO, {tradeCaseId: tradeCaseId});
    // return await callApi(endpoint);

    let data = []
    return { data }
  },
  async processed(tradeCaseId) {
    // const endpoint = getEndpoint(API_TRADE_DETAIL_CASE.PROCESSED, {tradeCaseId: tradeCaseId});
    // return await callApi(endpoint);

    let data = [
      {
        date: '2023-09-10 15:12:33',
        comment: '송금요청이 수정되었습니다 (사용자 아이디)',
        sender: '정준하'
      }
    ]
    return { data }
  },
  async files(tradeCaseId) {
    // const endpoint = getEndpoint(API_TRADE_DETAIL_CASE.FILES, {tradeCaseId: tradeCaseId});
    // return await callApi(endpoint);

    let data = [
      {
        date: '2023-09-10 15:12:33',
        name: '주민등록번호_김선',
        file: 'PDF'
      }
    ]
    return { data }
  }
}