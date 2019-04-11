const GeminiAPI = require("gemini-api").default;
const secret = "secret";
const key = "key";
const restClient = new GeminiAPI({key, secret, sandbox:true});

module.exports = {
    marketBuy:function(symbol)
    {
        return restClient.newOrder({amount: 1, 
                price: 10000,
                side: "buy", 
                symbol: symbol,
                options: ["immediate-or-cancel"]})
    }
    
}