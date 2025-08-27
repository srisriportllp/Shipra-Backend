import express from "express";
import mongoose from "mongoose";

import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log(`MongoDB connected to ${MONGO_URI}`))
  .catch(err => console.error("DB connection error:", err));

app.use("/auth", authRoutes);

app.listen(PORT, () => console.log(`Auth Service running on ${PORT}`));