global.fetch = require("node-fetch");
const GeminiAPI = require("gemini-api").default;

const secret = "my_Secret_Key";
const key = "my_secret_account_Key";
const ccAPI_Key = "CryptoCompare_API_Key";

const restClient = new GeminiAPI({key, secret, sandbox:true});
const cryptoCompare = require("cryptocompare");
cryptoCompare.setApiKey(ccAPI_Key);

//Below function will provide data of last 169 hours from cryptocompare
cryptoCompareAPI.coinList()
.then(coinList => {
        console.log(coinList)
    })
.catch(console.error)

//Below function will provide data of last 169 hours from cryptocompare

/*
cryptoCompareAPI.histoHour('BTC', 'USD')
.then(data => {
        console.log(data)
    })
.catch(console.error)
*/