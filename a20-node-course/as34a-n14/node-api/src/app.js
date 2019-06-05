const express = require("express");
const mongoose = require("mongoose");
const app = express();

require("./models/Product");
const Product = mongoose.model("Product");

mongoose.connect("mongodb://localhost:27017/node-api", {
  useNewUrlParser: true
});

app.get("/", (req, res) => {
  res.send("Olá mundo");
});

app.get("/cria", (req, res) => {
  Product.create({
    title: "ReactJS",
    description: "Just a sample",
    url: "http://www.google.com"
  });
  return res.send("Criado com sucesso!");
});

app.listen(9999);
