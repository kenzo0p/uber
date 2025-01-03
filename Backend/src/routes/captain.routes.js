import express from "express";
import { body } from "express-validator";
import {
  registerCaptain,
  loginCaptain,
  getCaptainProfile,
  logoutCaptain,

} from "../controllers/captain.controller.js";
import { authCaptain } from "../../middlewares/auth.middleware.js";

const router = express.Router();

router.post(
  "/register",
  [
    body("fullname.firstname")
      .isString()
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters"),
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
    body("vehicle.color")
      .isLength({ min: 3 })
      .withMessage("Color must be at least 3 characters"),
    body("vehicle.vehicleType")
      .isIn(["car", "motorcycle", "auto"])
      .isLength({ min: 3 })
      .withMessage("Invalid vehicle type"),
    body("vehicle.plate")
      .isLength({ min: 3 })
      .withMessage("Plate number must be at least 3 characters"),
    body("vehicle.capacity")
      .isInt()
      .withMessage("Capacity must be a atleast 1"),
  ],
  registerCaptain
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],
  loginCaptain
);

router.get("/profile", authCaptain, getCaptainProfile);
router.get("/logout", authCaptain, logoutCaptain);

export default router;
