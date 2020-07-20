const router = require("express").Router();
const Booking = require("../helpers/booking");

const reservations = [
    Booking("Chad", 2),
    Booking("Nick", 3)
]

router.get("/", (req, res) => {
    res.json(reservations)
})

router.post("/add", (req, res) => {
    console.log(req.body)
})

module.exports = router;