const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');

mongoose.connect("mongodb://localhost:27017/node-api", {
  useNewUrlParser: true
});

app.use(cors());
app.use(express.json());

app.use("/api", require("./routes"));

app.listen(9999);
