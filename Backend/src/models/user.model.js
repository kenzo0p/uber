import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const userSchema = new Schema(
  {
    fullname: {
      firstname: {
        type: String,
        required: true,
        minlength: [2, "First name must be atleast 2 characters long"],
      },
      lastname: {
        type: String,
        minlength: [3, "Last name must be atleast 3 characters long"],
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minlength: [5, "Enter valid email address"],
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    socketId: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.methods.generateAuthToken = function(){
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
  return token;
};

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
userSchema.statics.hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};
export const User = mongoose.model("User", userSchema);