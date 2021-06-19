import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Backdrop from "./components/Backdrop";

function App() {
  const [exchangeData, setExchangeData] = useState();
  const depthParam = "?symbol=BTCUSDT&limit=10";
  const burl = "https://api.binance.com";
  const query = `/api/v3/depth${depthParam}`;
  const url = burl + query;

  const getExchangeData = () => {
    axios.get(`${url}`).then((res) => {
      console.log("respons", res);
      // setExchangeData([JSON.stringify(res.data)]);
      setExchangeData(res.data);
    });
  };

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
    <div className="App">
      <h1>Binance Depth</h1>
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
      <button onClick={getExchangeData}>show me the data</button>
    </div>
  );
}

export default App;
