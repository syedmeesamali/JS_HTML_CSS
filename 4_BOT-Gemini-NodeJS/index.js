global.fetch = require("node-fetch");
const indicators = require("./indicators.js");
const exchange = require("./market.js");

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
                setTimeout(strategy, 1500);
            })

    });
} 
    
strategy();