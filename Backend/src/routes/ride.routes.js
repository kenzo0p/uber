import express from "express";
import {body} from 'express-validator'
const router = express.Router()
import {createRide} from '../controllers/ride.controller.js'
import { authUser } from "../../middlewares/auth.middleware.js";

router.post('/create' , authUser,
    body('pickup').isString().isLength({min:3}).withMessage('Invalid Pickup address'),
    body('destination').isString().isLength({min:3}).withMessage('Invalid destination'),
    body('vehicleType').isIn(['auto' , 'car' , 'moto']).withMessage('Invalid vehicle type' , createRide))

    router.get('/get-fare',
        authUser,
        query('pickup').isString().isLength({ min: 3 }).withMessage('Invalid pickup address'),
        query('destination').isString().isLength({ min: 3 }).withMessage('Invalid destination address'),
        getFare
    )
    
    router.post('/confirm',
        authCaptain,
        body('rideId').isMongoId().withMessage('Invalid ride id'),
        confirmRide
    )
    
    router.get('/start-ride',
        authCaptain,
        query('rideId').isMongoId().withMessage('Invalid ride id'),
        query('otp').isString().isLength({ min: 6, max: 6 }).withMessage('Invalid OTP'),
        startRide
    )
    
    router.post('/end-ride',
        authCaptain,
        body('rideId').isMongoId().withMessage('Invalid ride id'),
        endRide
    )    
export default router