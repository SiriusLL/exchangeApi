import React, { useState } from "react";

const ApiV2 = () => {
  const Binance = require("node-binance-api");
  const binance = new Binance().options({
    APIKEY: "",
    APISECRET: "",
  });

  let ticker = await binance.prices();
  console.info(`Price of BTC: ${ticker.BTCUSDT}`);
  return <h1>{ticker.BTCUSDT}</h1>;
};

export default ApiV2;
