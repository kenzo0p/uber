import express from "express";
import { body } from "express-validator";
import { registerUser } from "../controllers/user.controller.js";

const router = express.Router();
router.post("/register", [
  body("fullname.firstname")
    .isLength({ min: 2 })
    .withMessage("First name must be atleast 2 characters long"),
  body("email").isEmail().withMessage("Enter valid email address"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be atleast 6 characters long"),
],registerUser);

export default router;
