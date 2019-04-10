const cc = require('cryptocompare')
cc.setApiKey('ccAPI_Key')

module.exports = 
{
// 100-hour moving average function
HourlymovingAverage:function(cryptoAsset, Fiat, Hours, callback)
{
    if (Hours > 169 )
    {
        console.error("Only 169 hours allowed !")
        return
    }

    cc.histoHour(cryptoAsset, Fiat)
    .then(data => {
        data = data.reverse()
        var sum = 0;
    
        for (i=0; i<Hours; i++) 
        {
            sum += data[i].close;
        }
        var movingAvg = sum / Hours;
        callback(movingAvg);
    })
    .catch(console.error)
}

}//End of module exports
