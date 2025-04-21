import { Schema, model } from 'mongoose'

const stoclSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
}, { timestamps: true });

stoclSchema.index({ "$**": "text" }); // Create a text index on all fields

const Stock = model('Stock', stoclSchema, 'stocks');

export default Stock;   