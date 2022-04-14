
import { URLSearchParams } from 'url';
import fetch from 'node-fetch';

const ccxt = require("ccxt");

// const getCurrency = async (currency_pair: string) : Promise<any> => {
//     console.log("pass")
//     const binance = new ccxt.binance();
//     // const currency = await binance.fetchOHLCV(currency_pair, "1h", undefined, 4000);
//     const currency = await binance.fetchOHLCV(currency_pair, "1m", undefined,4000);
//     return currency;
// }

const getCurrency = async (currency_pair: string , start_date:string, end_date:string): Promise<any> => {

    let startDate=Date.now() - (3600 * 1000);

    const param = new URLSearchParams({
        "symbol": currency_pair,
        "limit":"1000",
        "startTime": start_date,
        "endTime": end_date
    });
    const result = await fetch('https://api.binance.com/api/v3/aggTrades?'+param);

    return result.json();

}

export default getCurrency;