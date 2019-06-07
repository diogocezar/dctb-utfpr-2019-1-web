const mongoose = require("mongoose");
const Product = require("../models/Product");

class ProductController {
  async index(req, res) {
    const products = await Product.find();
    return res.json(products);
  }
}

module.exports = new ProductController();
