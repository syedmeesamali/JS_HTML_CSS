const GeminiAPI = require("gemini-api").default;

const secret = "my_Secret_Key";
const key = "my_secret_account_Key";

const restClient = new GeminiAPI({key, secret, sandbox:true});

restClient.newOrder({amount: 10, price: 100, side: "buy", symbol: "btxusd"})
.then(response => console.log(response))
.catch(error => console.log(error))