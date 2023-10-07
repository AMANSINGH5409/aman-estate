import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";

import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import listingRoute from "./routes/listing.route.js";

const app = express();

dotenv.config();

// Utility Middlewares
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRoute);

//TO DEPLOY THE APP
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "client", "dist", "index.html")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname));
});

//Error Handling Middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("Connected to MongoDB!");
    app.listen(3000, () => {
      console.log("Server is running....");
    });
  })
  .catch((err) => {
    console.log(err);
  });
