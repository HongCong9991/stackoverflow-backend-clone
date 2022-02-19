const express = require("express");
const http = require("http");
const pool = require("./config/db.config");

const app = express();

// database connection
pool.query(`show databases`); // correct query
global.pool = pool;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

// server
const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
