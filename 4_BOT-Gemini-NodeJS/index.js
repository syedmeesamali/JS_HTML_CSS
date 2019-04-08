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
    for (i=0; i<100; i++) 
    {
        console.log(i);
        console.log(data[i].close)
    }
})
.catch(console.error)
