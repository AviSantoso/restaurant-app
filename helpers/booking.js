const Booking = function (name, seats) {
    const booking = {}
    booking.name = name;
    booking.seats = seats;
    return booking;
}

module.exports = Booking;