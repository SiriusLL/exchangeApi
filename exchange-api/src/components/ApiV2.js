import React, { useState } from "react";
const chalk = require("chalk");
require("dotenv").config();
const Binance = require("node-binance-api");
const binance = new Binance().options({
  APIKEY: `${process.env.APIKEY_API_KEY}`,
  APISECRET: `${process.env.APISECRET_API_KEY}`,
  useServerTime: true,
});

const ApiV2 = () => {
  const ticker = async () => {
    let ticker = await binance.prices();
    console.info(`Price of BTC: ${ticker.BTCUSDT}`);
    console.log(await binance.futuresPrices());
    return ticker.BTCUSDT;
  };
  return (
    <div>
      <h1>hello{ticker}</h1>
    </div>
  );
};

export default ApiV2;
