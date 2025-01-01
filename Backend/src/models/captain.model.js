import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const captainSchema = new Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlenght:[3,"Firstname must be atleast 3 characters long"]
        },
        lastname:{
            type:String,
            minlenght:[3,"Last name must be atleas 3 characters long"]
        }
    },
    email:{
        type:String,
        unique:true,
        requirer:true,
        lowercase:true,
        minlenght:[5,"Enter valid email address"],
        match:[ /^\S+@\S+\.\S+$/,"Enter valid email address" ]
    },
    password:{
        type:String,
        required:true,
        minlenght:[6,"Password must be atleast 6 characters long"],
    },
    socketId:{
        type:String
    },
    status:{
        type:String,
        enum:["active","inactive"],
        default:"inactive"
    },
    vehicle:{
        color:{
            type:String,
            required:true,
            minlenght:[3,"Color must be atleast 3 characters long"]
        },
        plate:{
            type:String,
            required:true,
            minlenght:[3,"Plate must be atleast 3 characters long"]
        },
        capacity:{
            type:Number,
            required:true,
            minlenght:[1,"Capacity must be atleast 1 characters long"]
        },
        vehicleType:{
            type:String,
            enum:["car","motorcycle" ,"auto"],
            required:true,
        }
    },
    location :{
        ltd:{
            type:Number
        },
        lng:{
            type:Number
        }
    }
},{timestamps:true})

captainSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id:this._id} , process.env.JWT_SECRET , {expiresIn:'24h'})
    return token;
}

captainSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password , this.password)
}
captainSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password , 10)
}
export const Captain = mongoose.model("Captain" ,captainSchema)