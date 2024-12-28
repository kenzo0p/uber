import { User } from "../models/user.model.js";
import {creatUser} from '../services/user.service.js'
import { validationResult } from "express-validator";
import BlacklistToken from "../models/blacklistToken.model.js";
export const registerUser = async(req,res,next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        console.log(errors.array());
        return res.status(400).json({errors:errors.array()})
    }
    const {fullname , email , password} = req.body;
    const isUserAlreadyExist = await User.findOne({email})
    if(isUserAlreadyExist) {
        return res.status(401).json({message:"User already exist"}) 
    }
    const hashPassword = await User.hashPassword(password)
    const user = await creatUser({
        firstname:fullname.firstname ,
        lastname:fullname.lastname, 
        email ,
        password:hashPassword
    })

    const token = user.generateAuthToken()
    return res.status(201).json({token , user})
}

export const loginUser = async(req,res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        console.log(errors.array());
        return res.status(400).json({errors:errors.array()})
    }
    const {email ,password}  = req.body;
    const user = await User.findOne(
        {email}
    ).select("+password")
    if(!user) {
        return res.status(401).json({message:"Invalid email or password"})
    }
    const isMatch = await user.comparePassword(password)
    if(!isMatch) {
        return res.status(401).json({message:"Password is incorrect"})
    }
    const token = user.generateAuthToken()
    res.cookie("token",token)
    return res.status(200).json({token, user})
} 

export const getUserProfile =async(req,res,next) => {
    res.status(200).json(req.user)
}

export const logoutUser = async(req,res,nesxt) =>{
    const token = req.cookies.token || req.headers.authorization.split(' ')[1]
    await BlacklistToken.create({token})
    res.clearCookie('token')
    return res.status(200).json({message:'Logged out'})
}
