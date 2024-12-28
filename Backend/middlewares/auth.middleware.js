import { User } from "../src/models/user.model.js";
import jwt from 'jsonwebtoken'
import BlacklistToken from "../src/models/blacklistToken.model.js";
import { Captain } from "../src/models/captain.model.js";

export const authUser = async(req,res,next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token) {
        return res.status(401).json({message:'Unauthorized'})
    }

    const isBlackListed = await BlacklistToken.findOne({token:token})
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

export const authCaptain = async (req,res,next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token) {
        return res.status(401).json({message:'Unauthorized'})
    }
    const isBlackListed = await BlacklistToken.findOne({token:token})
    if(isBlackListed){
        return res.status(401).json({message:"Unauthorized"})
    }
    try {
        const decoded = await jwt.verify(token , process.env.JWT_SECRET)
        const captain = await Captain.findById(decoded._id)
        req.captain = captain;
        return next() //its important to call next() to move to the next middleware
    } catch (error) {
        return res.status(401).json({message:"Unauthorized"})
    }

}