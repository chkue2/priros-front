import {API_URL,getEndpoint, GET, POST_AUTH} from "~/composables/useApi.js";

export const tradeCaseChargeService = {
    async list(tradeCaseId) {
        const endpoint = getEndpoint(API_URL.TRADE_CASE_CHARGER.LIST, {trade_case_id: tradeCaseId});
        return await GET(endpoint);
    },
    async report(data) {
        const endpoint = getEndpoint(API_URL.TRADE_CASE_CHARGER.REPORT, {trade_case_id: data.tradeCaseId});
        return await POST_AUTH(endpoint, {data: data});
    },
    async state(tradeCaseId) {
        // const endpoint = getEndpoint(API_TRADE_CASE_CHARGER.STATE, {tradeCaseId: tradeCaseId});
        // return {data, pending} = await useApi(endpoint);


        let data;
        let pending = false; // Mock data is immediately available, so no pending state

        switch (tradeCaseId) {
            case 1:
            case '1':
                data = [
                    {
                        "userId": "id1",
                        "firmCode": "FIRMCODE1",
                        "firmName": "회사이름",
                        "position": "대리",
                        "userName": "김대리",
                        "phone": "010-1234-1234",
                        "tradeCaseId": 1
                    },
                    {
                        "userId": "id2",
                        "firmCode": "FIRMCODE2",
                        "firmName": "사명",
                        "position": "과장",
                        "userName": "강호동",
                        "phone": "020-2234-2234",
                        "tradeCaseId": 2
                    }
                ];
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