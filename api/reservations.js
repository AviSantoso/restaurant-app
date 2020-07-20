const router = require("express").Router();

const reservations = [
    {
        name: "Chad"
    },
    {
        name: "Nick"
    }
]

router.get("/", (req, res) => {
    res.json(reservations)
})

module.exports = router;