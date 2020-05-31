var hotel = {
    //Variables below are deemed as Properties for Object
    name: "Quay",
    rooms: 40,
    booked: 25,
    gym: true,
    roomTypes: ['single', 'twin', 'suite'],
    //Method as part of Object
    checkAvailability: function() {
        return this.rooms - this.booked;
    }
}

var elName = document.getElementById("hotelName");
elName.textContent = hotel.name;

var room = document.getElementById("rooms");
room.textContent = hotel.checkAvailability();