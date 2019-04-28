global.fetch = require("node-fetch");
const indicator_file = require("./indicators.js");
const exchange = require("./market.js");

var strategy = function()
{
    console.log("            ");
    console.log("===================");
    console.log("Executing strategy!");
    
    ("BTC", "USD", 100, function(ma)
    {
          console.log("MA: ", ma);
    });
        setTimeout(strategy, 1000);
    }
}

strategy()