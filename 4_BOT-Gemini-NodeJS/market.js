const GeminiAPI = require("gemini-api").default;
const secret = "secret";
const key = "key";
const restClient = new GeminiAPI({key, secret, sandbox:true});

module.exports = {
    //Below function will try to buy bitcoin at current market price (aggressive target price)
    marketBuyBitcoin:function()
    {
        return restClient.newOrder({amount: 1, 
                price: 10000,
                side: "buy", 
                symbol: "btcusd",
                options: ["immediate-or-cancel"]})
    }, 
    
    //Below function will try to SELL bitcoin at current market price (aggressive target price for selling)
    marketSellBitcoin:function()
    {
        return restClient.newOrder({amount: 1, 
                price: 500,
                side: "sell", 
                symbol: "btcusd",
                options: ["immediate-or-cancel"]})
    }, 

    bitcoinPrice:function()
    {
        return restClient.getTicker("btcusd")
    }

    }
    