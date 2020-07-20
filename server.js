const express = require("express");

var app = express();

app.get("/", (req, res) => {
    res.send("Hello worlds!")
})

app.listen(process.env.PORT || 3000, () => console.log("Server online!"));