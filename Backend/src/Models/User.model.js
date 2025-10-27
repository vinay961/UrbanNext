import React from "react";
import { Mongoose } from "mongoose";

const userSchema = new Mongoose.Schema({
    uid: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ['user', 'client'], default: 'user' },
}, { timestamps: true });    

const User = Mongoose.model("User", userSchema);
export default User;
