import { Schema, model } from "mongoose";
import { userInterface } from "../types/userInterface";

const userSchema = new Schema<userInterface>({
    _id: { type: String, required: true },
    password: { type: String, required: true },
    fullName: { type: String, required: true },
    bDate: { type: String },
});

const userModel = model('user', userSchema);

export default userModel;