const express = require("express");
const path = require("path");

const server = express();
const publicDir = path.join(__dirname, "public");

server.use(express.static(publicDir));

server.listen(process.env.PORT || 3000, () => console.log("Server online!"));