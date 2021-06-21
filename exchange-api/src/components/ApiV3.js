import React, { useState } from "react";
import HmacSHA512 from "crypto-js/hmac-sha512";
import axios from "axios";

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

    const signature = CryptoJS.HmacSHA256(
      dataQueryString,
      keys["skey"]
    ).toString(CryptoJS.enc.Hex);

    const url = `${burl}${endPoint}?${dataQueryString}&signature=${signature}`;

    axios.get(`${url}`).then((res) => {
      console.log("respons", res);
      // setExchangeData([JSON.stringify(res.data)]);
      setData(res.data);
    });
  };
  return <>{data}</>;
};

export default ApiV3;
