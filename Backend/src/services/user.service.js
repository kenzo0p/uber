import { User } from "../models/user.model.js";

export const creatUser = async ({ firstname, lastname, password, email }) => {
  if (!firstname || !email || !password) {
    throw new Error("All fields are required");
  }
  try {
    const user = await User.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password
    })
    return user;
  } catch (error) {
    console.log(error, "error while creating a user")
  }
};