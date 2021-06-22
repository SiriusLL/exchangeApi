"use strict";
const ccxt = require("ccxt");
const ccxtpro = require("ccxt.pro");

const ApiVccxt = () => {
  // console.log("exchanges", ccxt.exchanges);
  (async () => {
    const exchange = new ccxtpro.binance({ enableRateLimit: true });
    while (true) {
      const orderbook = await exchange.watchOrderBook("ETH/BTC");
      console.log(new Date(), orderbook["asks"][0], orderbook["bids"][0]);
    }
  })();
  return <div>{hello}</div>;
};

export default ApiVccxt;
