global.fetch = require("node-fetch");

const indicators = require("./indicators.js");
const exchange = require("./market.js");

exchange.marketBuy("btcusd")
.then(res => console.log(res))
.catch(console.log(console.error));