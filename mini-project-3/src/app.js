"use strict";
const ccxt = require("ccxt");

(async () => {
  const binance = new ccxt.binance();
  const BTC_USDT = await binance.fetchOHLCV("BTC/USDT", "1h", undefined, 4000);
  console.log(
    `******************************data for BTC/USDT******************************`
  );
  console.log(BTC_USDT);

  const BTC_BNB = await binance.fetchOHLCV("BNB/BTC", "1h", undefined, 4000);
  console.log(
    `******************************data for BNB/BTC******************************`
  );
  console.log(BTC_BNB);
})();
