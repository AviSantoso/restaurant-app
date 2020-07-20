const router = require("express").Router();

const waitingList = [
    {
        name: "Thibault"
    }
]

router.get("/", (req, res) => {
    res.json(waitingList)
})

module.exports = router;