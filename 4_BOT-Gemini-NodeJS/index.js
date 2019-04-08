global.fetch = require("node-fetch");
const GeminiAPI = require("gemini-api").default;

const secret = "my_Secret_Key";
const key = "my_secret_account_Key";
const ccAPI_Key = "CryptoCompare_API_Key";

const restClient = new GeminiAPI({key, secret, sandbox:true});
const cc = require('cryptocompare')
cc.setApiKey('ccAPI_Key')
 
// 100-hour moving average function
function movingAverage(cryptoAsset, Fiat, Hours)
{
    if (Hours > 169 )
    {
        console.log("Only 169 hours allowed !")
        return
    }

    cc.histoHour(cryptoAsset, Fiat)
    .then(data => {
        data = data.reverse()
        var sum = 0;
    
        for (i=0; i<Hours; i++) 
        {
            sum += data[i].close;
        }
        var movingAvg = sum / Hours;
        console.log(movingAvg);
    })
    .catch(console.error)
}

movingAverage('BTC', 'USD', 50)