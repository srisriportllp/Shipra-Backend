import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use("/auth", createProxyMiddleware({ target: "http://localhost:5000", changeOrigin: true }));
app.use("/products", createProxyMiddleware({ target: "http://localhost:5001", changeOrigin: true }));
app.use("/orders", createProxyMiddleware({ target: "http://localhost:5002", changeOrigin: true }));

app.listen(3000, () => console.log("API Gateway running on port 3000"));
