import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [exchangeData, setExchangeData] = useState();
  const burl = "https://api.binance.com";
  const query = "/api/v3/exchangeInfo";
  const url = burl + query;

  const getExchangeData = () => {
    return axios.get(`${url}`).then((res) => {
      console.log("respons", res);
      setExchangeData(JSON.stringify(res.data));
    });
  };

  return (
    <div className="App">
      {exchangeData}
      <button onClick={getExchangeData}>show me the data</button>
    </div>
  );
}

export default App;
