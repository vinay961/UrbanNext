import mongoose from 'mongoose';

const spaceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: Number, required: true },
    type: { type: String, required: true },
    available: { type: Boolean, default: true },
    images: [{ type: String, required: false }],
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

const Space = mongoose.model('Space', spaceSchema);

export default Space;