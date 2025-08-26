import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";

const app = express();
app.use(express.json());


mongoose.connect("mongodb://127.0.0.1:27017/authDB")
  .then(() => console.log("MongoDB connected to authDB"))
  .catch(err => console.error("DB connection error:", err));

app.use("/auth", authRoutes);

app.listen(5000, () => console.log("Auth Service running on 5000"));
