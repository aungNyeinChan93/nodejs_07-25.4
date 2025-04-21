import mongoose, { Schema } from "mongoose";

const TestSchema = new Schema({
    name: { tpye: Schema.Types.String },
    age: { type: Schema.Types.Number },
    email: { type: Schema.Types.String, unique: true },
    password: { type: Schema.Types.String },
    date: { type: Schema.Types.Date, default: Date.now },
    isActive: { type: Schema.Types.Boolean, default: true },
});

const Test = mongoose.model('Test', TestSchema, 'tests');

export default Test;