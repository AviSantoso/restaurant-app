const Booking = function (name, numberOfPeople) {
    const booking = {}
    booking.name = name;
    booking.numberOfPeople = numberOfPeople;
    return booking;
}

module.exports = Booking;