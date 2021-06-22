import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Backdrop from "./components/Backdrop";
import Form from "./components/Form";
import ApiV1 from "./components/ApiV1";
import ApiV2 from "./components/ApiV2";
import ApiV3 from "./components/ApiV3";
import ApiVccxt from "./components/ApiVccxt";

function App() {
  return (
    <div className="App">
      <ApiVccxt />
    </div>
  );
}

export default App;
