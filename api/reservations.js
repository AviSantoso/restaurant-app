const router = require("express").Router();
const Booking = require("../helpers/booking");

const reservations = [
    Booking("Chad", 2),
    Booking("Nick", 3)
]

router.get("/", (req, res) => {
    res.json(reservations)
})

module.exports = router;