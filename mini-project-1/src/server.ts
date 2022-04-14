import Server from "./serverClass";
import getCurrency from "./api/get.currency";
import { currencyPairModel } from "./db/db.schema";

const server = new Server(4000, "mongodb://localhost:27017/currency");

server.init();

let BTC_USDT, BTC_BNB;

//get data for BNB/BTC

(async () => {

    const baseDate = Date.now();
    let result = [];

    for (let i = 4; i > 0; i--) {

        let start_date = (baseDate - (i * 3600 * 1000)).toString();

        let end_date = (baseDate - ((i - 1) * 3600 * 1000)).toString();

        let BTC_BNB = await getCurrency('BNBBTC', start_date, end_date);

        result = [...result, ...BTC_BNB];
    }

    const currency_array = [];

    result.map(item => {
        currency_array.push({
            name: 'BNB/BTC',
            OpenTime: item.a,
            Open: item.p,
            High: item.q,
            Low: item.f,
            Close: item.l,
            Volume: item.T,
        })
    });

    await currencyPairModel.insertMany(currency_array);

    console.log('BNB/BTC data saved to database successfully...')


})();

//get data for BTC/USDT

(async () => {

    const baseDate = Date.now();
    let result = [];

    for (let i = 4; i > 0; i--) {

        let start_date = (baseDate - (i * 3600 * 1000)).toString();

        let end_date = (baseDate - ((i - 1) * 3600 * 1000)).toString();

        let BTC_BNB = await getCurrency('BTCUSDT', start_date, end_date);

        result = [...result, ...BTC_BNB];
    }

    const currency_array = [];

    result.map(item => {
        currency_array.push({
            name: 'BTC/USDT',
            OpenTime: item.a,
            Open: item.p,
            High: item.q,
            Low: item.f,
            Close: item.l,
            Volume: item.T,
        })
    });

    await currencyPairModel.insertMany(currency_array);

    console.log('BTC/USDT data saved to database successfully...')

})();

server.listen();