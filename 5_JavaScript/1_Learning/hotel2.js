var hotel = new Object();
hotel.name = "Quay";
hotel.rooms = 40;
hotel.booked = 25;
hotel.checkAvailability = function() {
    return this.rooms - this.booked;
}


function hotel2(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function() {
        return this.rooms - this.booked;
    }
}
