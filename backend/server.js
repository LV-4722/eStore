const express = require("express");
const dotenv = require("dotenv");

// configure dotenv
dotenv.config();

// rest object
const app = express();

// rest api
app.get("/", (req, res) => {
  res.send("Welcome to app");
});

// PORT
const PORT = process.env.PORT || 8080;

// run listen
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
