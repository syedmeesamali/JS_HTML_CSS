global.fetch = require("node-fetch");
const indicators = require("./indicators.js");
const exchange = require("./market.js");

var strategy = function()
{
    console.log("Executing strategy!");
    setTimeout(strategy, 1000);
}

strategy()