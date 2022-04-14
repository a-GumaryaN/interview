"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const url_1 = require("url");
const node_fetch_1 = require("node-fetch");
const ccxt = require("ccxt");
// const getCurrency = async (currency_pair: string) : Promise<any> => {
//     console.log("pass")
//     const binance = new ccxt.binance();
//     // const currency = await binance.fetchOHLCV(currency_pair, "1h", undefined, 4000);
//     const currency = await binance.fetchOHLCV(currency_pair, "1m", undefined,4000);
//     return currency;
// }
const getCurrency = (currency_pair, start_date, end_date) => __awaiter(void 0, void 0, void 0, function* () {
    let startDate = Date.now() - (3600 * 1000);
    const param = new url_1.URLSearchParams({
        "symbol": currency_pair,
        "limit": "1000",
        "startTime": start_date,
        "endTime": end_date
    });
    const result = yield (0, node_fetch_1.default)('https://api.binance.com/api/v3/aggTrades?' + param);
    return result.json();
});
exports.default = getCurrency;
