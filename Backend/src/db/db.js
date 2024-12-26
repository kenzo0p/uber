import mongoose from 'mongoose'

const dbConnect = async () =>{
    try {
        await mongoose.connect(process.env.DB_CONNECT)
        console.log("DB CONNECTED SUCCESSFLLY")
    } catch (error) {
        console.log(error , "error in db connnection")
    }
}
export default dbConnect