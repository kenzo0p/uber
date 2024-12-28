import { User } from "../src/models/user.model.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const authUser = async(req,res,next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token) {
        return res.status(401).json({message:'Unauthorized'})
    }

    const isBlackListed = await User.findOne({token:token})
    if(isBlackListed){
        return res.status(401).json({message:"Unauthorized"})
    }
    try {
        const decoded = await jwt.verify(token , process.env.JWT_SECRET)
        const user = await User.findById(decoded._id)
        req.user = user;
        return next()
    } catch (error) {
        return res.status(401).json({message:"Unauthorized"})
    }
}