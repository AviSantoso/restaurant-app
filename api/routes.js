const router = require("express").Router();

router.use("/reservations", require("./reservations"));
router.use("/wait", require("./waiting-list"));

module.exports = router;