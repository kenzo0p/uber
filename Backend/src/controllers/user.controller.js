import { User } from "../models/user.model.js";
import {creatUser} from '../services/user.service.js'
import { validationResult } from "express-validator";
export const registerUser = async(req,res,next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        console.log(errors.array());
        return res.status(400).json({errors:errors.array()})
    }
    const {fullname , email , password} = req.body;
    console.log(req.body);
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
