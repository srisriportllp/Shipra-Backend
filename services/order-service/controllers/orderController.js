import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.json(order);
};

export const getOrders = async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
};
