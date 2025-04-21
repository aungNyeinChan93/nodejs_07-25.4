import { Schema, model } from 'mongoose';

const postSchema = new Schema({
    title: { type: Schema.Types.String, required: true },
    desc: { type: Schema.Types.String, required: true },
    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Post = model('Post', postSchema, 'posts');
export default Post;

