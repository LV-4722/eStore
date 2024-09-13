import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";

// configure dotenv
dotenv.config();

// connect to database
connectDB();

// rest object
const app = express();

// middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// routes
app.use("/api/v1/auth", authRoutes);

// rest api
app.get("/", (req, res) => {
  res.send("Welcome to app");
});

// PORT
const PORT = process.env.PORT || 8080;

// run listen
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});