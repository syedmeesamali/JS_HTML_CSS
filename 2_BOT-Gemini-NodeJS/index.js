global.fetch = require("node-fetch");
const indicators = require("./indicators.js");
const exchange = require("./market.js");

var hasPosition = false;
var strategy = function()
// If btc < ma ==>> BUY
// If btc > ma ==>> SELL
{
    console.log("  ")
    console.log("==================");
    console.log("Executing strategy");
    indicators.hourlyMovingAverage("BTC", "USD", 100, function(ma)
    {
        exchange.bitcoinPrice()
        .then(res => 
            {
                var btcprice = res.last;

                console.log("MA: ", ma);
                console.log("Price: ", btcprice);
                
                if (btcprice < ma && !hasPosition) //If price < ma and we don't have any position
                {
                    console.log("BUY BITCOIN!");
                    exchange.marketBuyBitcoin()
                    .then(res => {
                        console.log("Bitcoin buy successful");
                        hasPosition = true;
                        setTimeout(strategy, 1500);
                    })
                    .catch(error => console.error);
                }

                else if (btcprice > ma && hasPosition) //If we have position and price is more than moving average
                {
                    console.log("SELL BITCOIN!");
                    exchange.marketSellBitcoin()
                    .then(res => {
                        console.log("Bitcoin sold successfully");
                        hasPosition = false;
                        setTimeout(strategy, 1500);
                    })
                    .catch(error => console.error);
                }

                else    //HOLD bitcoin 
                {
                    console.log("HOLD BITCOIN");
                    setTimeout(strategy, 1500);
                }  
            })
    });
} 
    
strategy();