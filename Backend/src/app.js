import dotenv from 'dotenv' 
dotenv.config()
import express from 'express';
import cors from 'cors'
import dbConnect from './db/db.js';
import cookieParser from 'cookie-parser'
const app = express()
import userRoutes from './routes/user.routes.js'
dbConnect()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


// routes

app.use("/api/users" , userRoutes)



app.get('/' ,  (req,res) => {
    res.send("<h1>Hii starting with the new fullstack clone called uber</h1>")
} )

export default app