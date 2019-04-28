global.fetch = require("node-fetch");
const indicators = require("./indicators.js");
const exchange = require("./market.js");

var strategy = function()
{
    console.log("            ");
    console.log("===================");
    console.log("Executing strategy!");
    
    indicators.HourlymovingAverage("BTC", "USD", 100, function(ma)
    {
        exchange.bitcoinPrice()
        .then(res => 
        {
            var price = res.last;
            console.log("MA: ", ma);
            console.log("Price: ", price);
            setTimeout(strategy, 1000);
        })
    });
    

}

strategy()