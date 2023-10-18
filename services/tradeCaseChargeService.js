import useApi from "~/composables/useApi.js";
import {getEndpoint} from "~/utils/apiUtils.js";
import {API_TRADE_CASE_CHARGER} from "./apiConstatns.js";

export const tradeCaseChargeService = {
    async list(tradeCaseId) {
        const endpoint = getEndpoint(API_TRADE_CASE_CHARGER.LIST, {"tradeCaseId": tradeCaseId});
        const {data, pending, error} = await useApi(endpoint);

        if (error) {
            throw new Error(error);
        }

        return {data, pending};
    },
    async report(data) {
        const endpoint = getEndpoint(API_TRADE_CASE_CHARGER.REPORT, {tradeCaseId: data.tradeCaseId});
        const {pending, error} = await useApi(endpoint);

        if (error) {
            throw new Error(error);
        }

        return {pending};
    }
}