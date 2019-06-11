const mongoose = require("mongoose");
const Product = require("../models/Product");

class ProductController {
  async index(req, res) {
    const products = await Product.find();
    return res.json(products);
  }
  async store(req, res) {
    const product = req.body;
    const savedProduct = await Product.create(product);
    return res.json(savedProduct);
  }
  async show(req, res) {
    const id = req.params.id;
    const product = await Product.findById(id);
    return res.json(product);
  }
  async update(req, res) {
    const product = req.body;
    const id = req.params.id;
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true
    });
    return res.json(updatedProduct);
  }
  async delete(req, res) {
    const id = req.params.id;
    await Product.findByIdAndDelete(id);
    return res.json({ deleted: true });
  }
}

module.exports = new ProductController();
