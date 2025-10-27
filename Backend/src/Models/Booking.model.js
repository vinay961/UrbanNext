import {React} from 'react';
import { Mongoose } from 'mongoose';

const bookingSchema = new Mongoose.Schema({
    space: { type: Mongoose.Schema.Types.ObjectId, ref: 'Space', required: true },
    user: { type: Mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    message : { type: String },
    date: { type: Date, default: Date.now },
    status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
}, { timestamps: true });

const Booking = Mongoose.model("Booking", bookingSchema);
export default Booking;
