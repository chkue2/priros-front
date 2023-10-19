import {callApi, getEndpoint} from "~/composables/useApi.js";
import {API_TRADE_CASE_CHARGER} from "./apiConstatns.js";

export const tradeCaseChargeService = {
    async list(tradeCaseId) {
        const endpoint = getEndpoint(API_TRADE_CASE_CHARGER.LIST, {tradeCaseId: tradeCaseId});
        return await callApi(endpoint);

    },
    async report(data) {
        const endpoint = getEndpoint(API_TRADE_CASE_CHARGER.REPORT, {tradeCaseId: data.tradeCaseId});
        return await callApi(endpoint, {data: data});
    },
    async state(tradeCaseId) {
        // const endpoint = getEndpoint(API_TRADE_CASE_CHARGER.STATE, {tradeCaseId: tradeCaseId});
        // return {data, pending} = await useApi(endpoint);


        let data;
        let pending = false; // Mock data is immediately available, so no pending state

        switch (tradeCaseId) {
            case 1:
            case '1':
                data = null;
                break;
            case 2:
            case '2':
                data = {
                    "userId": "id1",
                    "firmCode": "FIRMCODE1",
                    "firmName": "회사이름",
                    "position": "대리",
                    "userName": "김대리",
                    "phone": "010-1234-1234",
                    "tradeCaseId": 1
                };
                break;
            default:
                console.warn(`Unexpected tradeCaseId: ${tradeCaseId}`);
                data = null;
                break;
        }

        return {data, pending};
    }
}