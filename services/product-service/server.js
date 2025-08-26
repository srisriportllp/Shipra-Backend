import express from "express";
import mongoose from "mongoose";
import productRoutes from "./routes/productRoutes.js";

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/productDB")
  .then(() => console.log("MongoDB connected to productDB"))
  .catch(err => console.error("DB connection error:", err));

app.use("/products", productRoutes);

app.listen(5001, () => console.log("Product Service running on 5001"));
