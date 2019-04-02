const GeminiAPI = require("gemini-api").default;

const secret = "my_Secret_Key";
const key = "my_secret_account_Key";

const restClient = new GeminiAPI({key, secret, sandbox:true});

/*
restClient.newOrder({amount: 10, price: 100, side: "buy", symbol: "btcusd"})
.then(response => console.log(response)); */

restClient.getOrderBook("btcusd").then(response => console.log(response));