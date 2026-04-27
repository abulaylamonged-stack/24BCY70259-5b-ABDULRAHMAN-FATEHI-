const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// View Engine
app.set("view engine", "ejs");

// Routes
app.use("/", require("./routes/studentRoutes"));

// Server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});