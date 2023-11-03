import { defineStore } from 'pinia'

export const useDetailCaseStore = defineStore('detailCase', {
  state: () => ({
    fetchedDetailCase: {},
    fetchedChangedList: [],
    fetchedMemoList: [],
    fetchedProcessedList: [],
    fetchedFilesList: []
  }),
  actions: {
    async fetchDetailCase() {
      try {
        this.fetchedDetailCase = {
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
      } catch (e) {
        console.log(e)
      }
    },
    async fetchChangedList() {
      try {
        this.fetchedChangedList = [
          {
            date: '2023-09-10 15:12:33',
            comment: '요청사건 의뢰 상태로 변경, 이부분은 최대한 두줄로 유지 가능한지 블라블라',
            sender: '최대네자'
          }
        ]
      } catch(e) {
        console.log(e)
      }
    },
    async fetchMemoList() {
      try {
        this.fetchedMemoList = []
      } catch(e) {
        console.log(e)
      }
    },
    async fetchProcessedList() {
      try {
        this.fetchedProcessedList = [
          {
            date: '2023-09-10 15:12:33',
            comment: '송금요청이 수정되었습니다 (사용자 아이디)',
            sender: '정준하'
          }
        ]
      } catch(e) {
        console.log(e)
      }
    },
    async fetchFilesList() {
      try {
        this.fetchedFilesList = [
          {
            date: '2023-09-10 15:12:33',
            name: '주민등록번호_김선',
            file: 'PDF'
          }
        ]
      } catch(e) {
        console.log(e)
      }
    }
  }
})