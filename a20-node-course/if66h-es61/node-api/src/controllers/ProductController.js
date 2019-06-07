const mongoose = require("mongoose");
require("../models/Product");
const Product = mongoose.model("Product");

class ProductController {
  async index(req, res) {
    const products = await Product.find();
    return res.json(products);
  }
}

module.exports = new ProductController();
