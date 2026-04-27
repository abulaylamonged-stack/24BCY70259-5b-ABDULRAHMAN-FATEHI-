const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const serverless = require("serverless-http");

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// View Engine
app.set("view engine", "ejs");

// Routes
app.use("/", require("./routes/studentRoutes"));

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});


module.exports = app;
module.exports.handler = serverless(app);