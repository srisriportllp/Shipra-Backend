import Product from "../models/Product.js";

export const addProduct = async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
};

export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};
