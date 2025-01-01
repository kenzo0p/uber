import dotenv from 'dotenv' 
dotenv.config()
import express from 'express';
import cors from 'cors'
import dbConnect from './db/db.js';
import cookieParser from 'cookie-parser'
import userRoutes from './routes/user.routes.js'
import captainRoutes from './routes/captain.routes.js'
import mapsRoutes from './routes/map.routes.js'
import rideRoutes from './routes/ride.routes.js'

const app = express()
dbConnect()

// middlerwares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


// routes

app.use("/api/users" , userRoutes)
app.use("/api/captains" , captainRoutes)
app.use('/maps' , mapsRoutes)
app.use('/rides' , rideRoutes)



app.get('/' ,  (req,res) => {
    res.send("<h1>Hii starting with the new fullstack clone called uber</h1>")
} )

export default app