import { mongoose, Schema } from "mongoose";

const userSchema = new Schema({
    uid: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ['user', 'client'], default: 'user' },
}, { timestamps: true });    

const User = mongoose.model("User", userSchema);
export default User;
