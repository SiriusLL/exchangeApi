import React, { useState } from "react";
import axios from "axios";
import Backdrop from "./Backdrop";
import Form from "./Form";

const ApiV1 = () => {
  const [exchangeData, setExchangeData] = useState();
  const [pair, setPair] = useState("");
  const [price, setPrice] = useState(null);

  const getExchangeData = (base, limit) => {
    console.log("base", base, "limit", limit);
    const depthParam = `?symbol=${base}&limit=${limit}`;
    const burl = "https://api.binance.com";
    const query = `/api/v3/depth${depthParam}`;
    const url = burl + query;

    axios.get(`${url}`).then((res) => {
      console.log("respons", res);
      // setExchangeData([JSON.stringify(res.data)]);
      setExchangeData(res.data);
    });
  };

  // const binanceSocket = new WebSocket(
  //   "wss://stream.binance.com:9443/ws/btcusdt@trade"
  // );
  // console.log("ws", binanceSocket);
  // binanceSocket.onmessage = function (event) {
  //   const messageObject = JSON.parse(event.data);
  //   console.log(messageObject.s, messageObject.p);
  //   setPair(messageObject.s);
  //   setPrice(messageObject.p);
  // };

  // const lastUpdated = exchangeData.lastUpdateId;
  // console.log("lastUpdated", lastUpdated);
  console.log("exchangeData", exchangeData);
  // const bids = () => {
  //   return exchangeData.bids.map((element) => {
  //     return <p>{element}</p>;
  //   });
  // };
  const date = (time) => {
    return new Date((time * 1000).toLocaleString);
  };
  // console.log("money", exchangeData.lastUpdateId);

  return (
    <div>
      <h1>Binance Depth</h1>
      <div>
        <h4>Bids</h4>
        {/* {exchangeData} */}
        {/* {exchangeData && date(exchangeData.lastUpdateId)} */}
        {!exchangeData ? (
          <Backdrop />
        ) : (
          exchangeData.bids.map((element) => {
            return <p>{element}</p>;
          })
        )}
        <h4>Asks</h4>
        {!exchangeData ? (
          <Backdrop />
        ) : (
          exchangeData.asks.map((element) => {
            return <p>{element}</p>;
          })
        )}
      </div>
      <Form onClick={getExchangeData} />
      {/* <button onClick={getExchangeData}>show me the data</button> */}
      <br />
      {/* {pair}- {price} */}
    </div>
  );
};

export default ApiV1;
