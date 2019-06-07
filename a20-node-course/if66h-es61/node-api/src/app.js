const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb://node-api:123abc123@ds135207.mlab.com:35207/node-api",
  {
    useNewUrlParser: true
  }
);

app.use("/api", routes);
app.listen(9999);
