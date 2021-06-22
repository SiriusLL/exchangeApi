const ccxt = require("ccxt");

const ApiVccxt = () => {
  console.log("exchanges", ccxt.exchanges);
  return <div>{console.log(ccxt.exchanges)}</div>;
};

export default ApiVccxt;
