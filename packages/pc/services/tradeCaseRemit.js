import {
	API_URL,
	GET_AUTH,
	POST_AUTH,
	getEndpoint,
} from '~/composables/useApi.js';

export const tradeCaseRemit = {
	async get(tradeCaseId) {
		const endpoint = getEndpoint(API_URL.TRADE_CASE.REMIT, {
			trade_case_id: tradeCaseId,
		});
		return await GET_AUTH(endpoint);
	},
	async post(tradeCaseId, data) {
		const endpoint = getEndpoint(API_URL.TRADE_CASE.REMIT, {
			trade_case_id: tradeCaseId,
		});
		return await POST_AUTH(endpoint, data);
	},
	async request(tradeCaseId, data) {
		const endpoint = getEndpoint(API_URL.TRADE_CASE.REMIT_REQUEST, {
			trade_case_id: tradeCaseId,
		});
		return await POST_AUTH(endpoint, data);
	},
	async auth(tradeCaseId, data) {
		const endpoint = getEndpoint(API_URL.TRADE_CASE.REMIT_AUTH, {
			trade_case_id: tradeCaseId,
		});
		return await POST_AUTH(endpoint, data);
	},
	async authCheck(tradeCaseId, data) {
		const endpoint = getEndpoint(API_URL.TRADE_CASE.REMIT_AUTH_CHECK, {
			trade_case_id: tradeCaseId,
		});
		return await POST_AUTH(endpoint, data);
	},
	async getKakao(tradeCaseId) {
		const endpoint = getEndpoint(API_URL.TRADE_CASE.REMIT_REQUEST_KAKAO, {
			trade_case_id: tradeCaseId,
		});
		return await GET_AUTH(endpoint);
	},
	async postKakao(tradeCaseId, data) {
		const endpoint = getEndpoint(API_URL.TRADE_CASE.REMIT_REQUEST_KAKAO, {
			trade_case_id: tradeCaseId,
		});
		return await POST_AUTH(endpoint, data);
	},
};
