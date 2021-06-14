const express = require("express");
const connect = require("./config/connectDB");
require("dotenv").config("./config/.env");
const cors = require("cors");
//instantiation
const app = express();
// middlewware
app.use(express.json());
app.use(cors());
// connect to DB
connect();
//route
app.use("/api/persons", require("./routes/person"));
//port
const port = process.env.port;
app.listen(port, (err) => {
  err ? console.log(err) : console.log(`server is running on port ${port}`);
});
