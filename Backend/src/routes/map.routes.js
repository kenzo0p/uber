import express  , {Router} from 'express'
import { getAutoCompleteSuggestions, getCoordinates, getDistanceTime } from '../controllers/map.controller.js'
import { authUser } from '../../middlewares/auth.middleware.js'
import { query } from 'express-validator'


const router = Router()

router.get('/get-coordinates',query('address').isString().isLength({min:3}) ,authUser , getCoordinates)
router.get('/get-distance-time' , 
    query('origin').isString().isLength({min:3}),
    query('destination').isString().isLength({min:3}),
    authUser,
    getDistanceTime
)
router.get('/get-suggestion' ,query('input').isString().isLength({min:3})  ,authUser ,getAutoCompleteSuggestions)


export default router