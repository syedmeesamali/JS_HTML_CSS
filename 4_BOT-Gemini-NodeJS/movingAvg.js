module.exports = 
{
// 100-hour moving average function
function movingAverage(cryptoAsset, Fiat, Hours)
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
        console.log(movingAvg);
    })
    .catch(console.error)
}
movingAverage('BTC', 'USD', 50)

}//End of module exports
