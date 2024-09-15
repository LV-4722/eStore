import express from "express";
import {
  forgotPasswordController,
  registerController,
  updateProfileController,
} from "../controllers/authController.js";
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

// forgot password
router.post("/forgot-password", forgotPasswordController);

// protected route user auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
// protected route auth admin
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

// update profile
router.put("/profile", requireSignIn, updateProfileController);

// TEST routes
router.get("/test", requireSignIn, isAdmin, testController);

export default router;
