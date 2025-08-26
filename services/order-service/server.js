import express from "express";
import mongoose from "mongoose";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();
app.use(express.json());


mongoose.connect("mongodb://127.0.0.1:27017/orderDB")
  .then(() => console.log("MongoDB connected to orderDB"))
  .catch(err => console.error("DB connection error:", err));

app.use("/orders", orderRoutes);

app.listen(5002, () => console.log("Order Service running on 5002"));
