(function() {
    var hotel = {
        name: 'Park',
        roomRate: 240,
        discount: 15,
        offerPrice: function() {
            var offerRate = this.roomRate * ((100 - this.discount) / 100);
            return offerRate;
        }
    }

    var hotelName, roomRate, specialRate;
    hotelName = document.getElementById('hotelName');
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');

    hotelName.textContent = hotelName;
    roomRate.textContent = '$' + hotel.roomRate.toFixed(2);
    specialRate.textContent = '$' + hotel.offerPrice();

    var expiryMsg;
    var today;
    var elEnds;

    function offerExpires(today) {
        var weekFromToday, day, date, month, year, dayNames, monthNames;
        weekFromToday = new Date(today.getTime() + 7*24*60*60*1000);
        dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        
    }


}()); //End of immediately invoked function expression IIFE
