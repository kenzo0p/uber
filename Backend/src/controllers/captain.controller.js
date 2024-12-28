import { Captain } from "../models/captain.model.js";
import { createCaptain } from "../services/captain.service.js";
import { validationResult } from "express-validator";
import BlacklistToken from "../models/blacklistToken.model.js";

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

export const loginCaptain = async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(401).json({errors:errors.array()})
    }

    const {email ,password} = req.body;
    const captain = await Captain.findOne({email}).select("+password");
    if(!captain) {
        return res.status(401).json({message:"Invalid email or password"})
    }
    const isPassWordMatch = await captain.comparePassword(password)
    if(!isPassWordMatch) {
        return res.status(401).json({message:"Password is incorrect"})
    }
    const token = captain.generateAuthToken();
    res.cookie("token" ,token)
    return res.status(200).json({token , captain})
}


export const getCaptainProfile  =async(req,res) => {
    return res.status(200).json(req.captain)
}

export const logoutCaptain  = async(req,res) => {
    const token = req.cookies.token || req.headers?.authorization.split(' ')[1]
    await BlacklistToken.create({token})
    res.clearCookie('token')
    return res.status(200).json({message:"Logged out"})
}