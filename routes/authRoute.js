import express from "express";
import { registerController } from "../controllers/authController.js";
import { loginController } from "../controllers/authController.js";
import { testController } from "../controllers/authController.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";
import { isAdmin } from "../middlewares/authMiddleware.js";

// router object
const router = express.Router();

// routing
// REGISTER
router.post("/register", registerController);

// LOGIN
router.post("/login", loginController);

// TEST routes
router.get("/test", requireSignIn, isAdmin, testController);

export default router;