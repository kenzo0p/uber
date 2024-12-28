import { Captain } from "../models/captain.model.js";

export const createCaptain = async ({firstname,lastname , email,password , color , plate  ,capacity , vehicleType}) => {
    if(!firstname || !lastname || !email || !password || !color || !plate || !capacity || !vehicleType){
        throw new Error("All fields are required")
    }
    const captain =await Captain.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password,
        vehicle:{
            color,
            plate,
            capacity,
            vehicleType
        }
    })
    if(!captain) {
        throw new Error("Could not create captain");
    }
    return captain;
}