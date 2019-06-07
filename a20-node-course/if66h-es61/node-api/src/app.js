const express = require("express");
const mongoose = require("mongoose");
const app = express();
mongoose.connect("mongodb://localhost:27017/node-api", {
  useNewUrlParser: true
});
require("./models/Product");
const Product = mongoose.model("Product");
app.get("/", (req, res) => {
  res.send("Olá Mundo!");
});
app.get("/produtos", (req, res) => {
  res.send("Olá Produto1!");
});
app.get("/cadastrar", (req, res) => {
  Product.create({
    title: "ReactJS",
    description: "Just a sample",
    url: "http://www.google.com"
  });
  res.send("Produto Criado!");
});
app.listen(9999);
