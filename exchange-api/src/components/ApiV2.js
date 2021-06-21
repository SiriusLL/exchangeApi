import React, { useState } from "react";
require("dotenv").config();

const ApiV2 = () => {
  const Binance = require("node-binance-api");
  const binance = new Binance().options({
    APIKEY: `${process.env.APIKEY_API_KEY}`,
    APISECRET: `${process.env.APISECRET_API_KEY}`,
  });

  let ticker = await binance.prices();
  console.info(`Price of BTC: ${ticker.BTCUSDT}`);
  return <h1>{ticker.BTCUSDT}</h1>;
};

export default ApiV2;
