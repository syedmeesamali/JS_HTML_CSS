const GeminiAPI = require("gemini-api").default;

const secret = "asdfadsf";
const key = "mykey";

const restClient = new GeminiAPI({key, secret, sandbox:true});

restClient.newOrder({amount: 10, price: 100, side: "buy", symbol: "btcusd"})
.then(response => console.log(response));