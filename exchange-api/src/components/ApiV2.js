import React, { useState } from "react";
require("dotenv").config();
const Binance = require("node-binance-api");
const binance = new Binance().options({
  APIKEY: `${process.env.APIKEY_API_KEY}`,
  APISECRET: `${process.env.APISECRET_API_KEY}`,
});

const ticker = async () => {
  let ticker = await binance.prices();
  console.info(`Price of BTC: ${ticker.BTCUSDT}`);
  return ticker.BTCUSDT;
};

const ApiV2 = () => {
  return (
    <div>
      <h1>{ticker}</h1>;
    </div>
  );
};

export default ApiV2;
