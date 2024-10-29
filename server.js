import express from "express"; // to create server and handle routing
import dotenv from "dotenv"; // to configure env
import morgan from "morgan"; // to log HTTP request in the console
import connectDB from "./config/db.js"; // to connect to database
import authRoutes from "./routes/authRoute.js"; // to handle auth routes
import categoryRoutes from "./routes/categoryRoutes.js"; // to handle category routes
import productRoutes from "./routes/productRoutes.js"; // to handle product routes
import cors from "cors"; // to enable cross-origin request
import path from "path"; // to handle directory path
import { fileURLToPath } from "url"; // to handle file path

//configure env
dotenv.config();

//databse config
connectDB();

//rest object
const __filename = fileURLToPath(import.meta.url); // to get the file path
const __dirname = path.dirname(__filename); // to get the directory path
const app = express(); // to initialize express app

//middelwares
app.use(cors()); // enables cross-origin request
app.use(express.json()); // to parse incoming json data
app.use(morgan("dev")); // log HTTP request in the console in dev mode
app.use(express.static(path.join(__dirname, "/frontend/build"))); // to serve static files

//routes
app.use("/api/v1/auth", authRoutes); // auth routes
app.use("/api/v1/category", categoryRoutes); // category routes
app.use("/api/v1/product", productRoutes); // product routes

//rest api
app.use("*", function (req, res) {
  // all other routes
  res.sendFile(path.join(__dirname, "/frontend/build/index.html"));
});

//PORT
const PORT = process.env.PORT || 8080; // port number

//run listen
app.listen(PORT, () => {
  // starts server and prints in console
  console.log(`Server Running on  mode on port ${PORT}`);
});
