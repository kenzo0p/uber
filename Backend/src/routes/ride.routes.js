import express from "express";
import {body} from 'express-validator'
const router = express.Router()
import {createRide} from '../controllers/ride.controller.js'
import { authUser } from "../../middlewares/auth.middleware.js";

router.post('/create' , authUser,
    body('pickup').isString().isLength({min:3}).withMessage('Invalid Pickup address'),
    body('destination').isString().isLength({min:3}).withMessage('Invalid destination'),
    body('vehicleType').isIn(['auto' , 'car' , 'moto']).withMessage('Invalid vehicle type' , createRide))

export default router