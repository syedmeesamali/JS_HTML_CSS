const cc = require('cryptocompare')
cc.setApiKey('ccAPI_Key')

module.exports = 
const ccAPI_Key = "41067c4a78f2232322cca0494c3d1f7ea96414c32a75d19ca483f8e0710de13d";
const cc = require('cryptocompare')
cc.setApiKey('ccAPI_Key')

module.exports = 
{
// Hourly moving average function
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
        callback(HourlymovingAverage);
    })
    .catch(console.error)
} //End of the function for hourly averages

// Daily
DailymovingAverage:function(cryptoAsset, Fiat, Days, callback)
{
    if (Days > 200 )
    {
        console.error("Only 200 days allowed !")
        return
    }

    cc.histoDay(cryptoAsset, Fiat)
    .then(data => {
        data = data.reverse()
        var sum = 0;
    
        for (i=0; i<Days; i++) 
        {
            sum += data[i].close;
        }
        var movingAvg = sum / Days;
        callback(DailymovingAverage);
    })
    .catch(console.error)
} //End of the function for hourly averages


}//End of module exports