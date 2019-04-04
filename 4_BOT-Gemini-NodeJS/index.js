const GeminiAPI = require("gemini-api").default;

const secret = "my_Secret_Key";
const key = "my_secret_account_Key";

const restClient = new GeminiAPI({key, secret, sandbox:true});

//Get the current available balance
console.log("My available balance is below!")
restClient.getMyAvailableBalances()
.then(response => console.log(response))
.catch(error => console.log(error));

//Buy 10 BTC @ price of 100 USD / BTC
console.log("Buy 10 BTC @ price of 100 USD / BTC")
restClient.newOrder({amount:10, price:100, side:"buy", symbol:"btcusd"})
.then(response => console.log(response))
.catch(error => console.log(error));

//Buy 15 BTC @ price of 1000 USD / BTC
console.log("Buy 15 BTC @ price of 1000 USD / BTC")
restClient.newOrder({amount:15, price:1000, side:"buy", symbol:"btcusd"})
.then(response => console.log(response))
.catch(error => console.log(error));

//Buy 10 ETH @ price of 100 USD / BTC
console.log("Buy 10 ETH @ price of 100 USD / BTC")
restClient.newOrder({amount:10, price:100, side:"buy", symbol:"ethusd"})
.then(response => console.log(response))
.catch(error => console.log(error));

//Below is list of my active orders
console.log("List of my active orders !")
restClient.getMyActiveOrders()
.then(response => console.log(response))
.catch(error => console.log(error));

//Cancell all the existing orders
console.log("Cancelling all the existing orders !")
restClient.cancelAllActiveOrders()
.then(response => console.log(response))
.catch(error => console.log(error));

//Below is list of my active orders
console.log("List of my active orders now !")
restClient.getMyActiveOrders()
.then(response => console.log(response))
.catch(error => console.log(error));
