import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [exchangeData, setExchangeData] = useState();
  const depthParam = "?symbol=BTCUSDT";
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
  const date = () => {
    return new Date(exchangeData.lastUpdateId);
  };
  return (
    <div className="App">
      {/* {exchangeData} */}
      {/* {exchangeData && date} */}
      {exchangeData &&
        exchangeData.bids.map((element) => {
          return <p>{element}</p>;
        })}
      <button onClick={getExchangeData}>show me the data</button>
    </div>
  );
}

export default App;
