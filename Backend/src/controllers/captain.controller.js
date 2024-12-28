import { Captain } from "../models/captain.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { createCaptain } from "../services/captain.service.js";
import { validationResult } from "express-validator";

export const registerCaptain = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(401).json({ errors: errors.array() });
  }
  try {
    const { fullname , email, password, vehicle } = req.body;
    const isCaptainAlreadyExist = await Captain.findOne({email});
    if(isCaptainAlreadyExist){
        return res.status(401).json({message:"Captain already exist"});
    }
    const hashPassword = await Captain.hashPassword(password);
    const captain = await createCaptain({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashPassword,
      color: vehicle.color,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType,
    });
    const token = captain.generateAuthToken();
    return res
      .status(201)
      .json({ message: "Captain created successfully", captain, token });
  } catch (error) {
    console.log(error, "Error in captain registration");
    return res.status(500).json({ errors: error.message });
  }
};
