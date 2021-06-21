import React, { useState } from "react";
import axios from "axios";
// import HmacSHA512 from "crypto-js/hmac-sha512";
const CryptoJS = require("crypto-js");

const ApiV3 = () => {
  const [data, setData] = useState(null);
  const getExchangeData = (base, limit) => {
    // console.log("base", base, "limit", limit);
    const param = `?symbol=${base}&limit=${limit}`;

    const burl = `https://api.binance.com`;
    const endPoint = `/api/v3/account`;
    const dataQueryString = `recvWindow=20000&timestamp=${Date.now()}`;

    const keys = {
      akey: `${process.env.APIKEY_API_KEY}`,
      skey: `${process.env.APISECRET_API_KEY}`,
    };
    console.log("aa", CryptoJS);
    const signature = CryptoJS.HmacSHA256(
      dataQueryString,
      keys["skey"]
    ).toString(CryptoJS.enc.Hex);

    const url = `${burl}${endPoint}?${dataQueryString}&signature=${signature}`;

    axios.get(`${url}`, { "X-MBX-APIKEY": keys["akey"] }).then((res) => {
      console.log("respons", res);
      setData([JSON.stringify(res.data)]);
      // setData(res.data);
      return;
    });
  };
  return <>{getExchangeData}</>;
};

export default ApiV3;
