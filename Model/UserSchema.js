import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  organizationName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    validate: (value) => {
      return validator.isEmail(value);
    },
  },
  address: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: false,
    default: "user",
  },
  contactNumber: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    require: false,
    default: Date.now,
  },
});
export const UserModel = mongoose.model("users", userSchema);
export default UserModel;
