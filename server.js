const express = require("express");
const path = require("path");

const server = express();
const publicDir = path.join(__dirname, "public");
const PORT = process.env.PORT || 3000;

const apiRouter = require("./api/routes.js");

server.use(express.static(publicDir));
server.use("/api", apiRouter);

server.listen(PORT, () => console.log("Server online at http://localhost:" + PORT));