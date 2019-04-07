global.fetch = require("node-fetch");
const GeminiAPI = require("gemini-api").default;

const secret = "my_Secret_Key";
const key = "my_secret_account_Key";
const ccAPI_Key = "CryptoCompare_API_Key";

const restClient = new GeminiAPI({key, secret, sandbox:true});
const cc = require('cryptocompare')
cc.setApiKey('ccAPI_Key')
 
// Basic Usage:
cc.priceHistorical('BTC', ['USD', 'EUR'], new Date('2018-01-01'))
.then(prices => {
  console.log(prices)
  // -> { BTC: { USD: 997, EUR: 948.17 } }
})
.catch(console.error)