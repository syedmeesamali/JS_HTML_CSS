global.fetch = require("node-fetch");
const GeminiAPI = require("gemini-api").default;

const secret = "my_Secret_Key";
const key = "my_secret_account_Key";
const ccAPI_Key = "CryptoCompare_API_Key";

const restClient = new GeminiAPI({key, secret, sandbox:true});
const cc = require('cryptocompare')
cc.setApiKey('ccAPI_Key')
 
// Data for latest last hour 
cc.histoHour('BTC', 'USD')
.then(data => {
    data = data.reverse()
    console.log(data[0])
    console.log(data.length)
})
.catch(console.error)
