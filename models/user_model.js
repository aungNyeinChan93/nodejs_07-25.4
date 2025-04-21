import { Schema, model } from "mongoose";
import { type } from "os";

const userSchema = new Schema({
    name: { type: Schema.Types.String, required: true },
    email: { type: Schema.Types.String, unique: true },
    create_at: { type: Schema.Types.Date, default: Date.now },

});

const User = model('User', userSchema, 'users');

export default User;

