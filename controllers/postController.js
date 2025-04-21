import Post from '../models/post_model.js';
import { Response } from '../utils/core.js'
import mongoose from 'mongoose';

const PostController = {
    create: async (req, res, next) => {
        try {
            const fields = {
                title: req.body.title,
                desc: req.body.desc,
                user_id: req.body.user_id,
            }
            // Validate fields
            if (!fields.title || !fields.desc) {
                return Response.success(res, 'Title and description are required', {}, 400);
            }
            // Check if user_id is valid
            if (!mongoose.Types.ObjectId.isValid(fields.user_id)) {
                return Response.success(res, 'Invalid user ID', {}, 400);
            }

            const post = await Post(fields).save();
            if (!post) {
                return Response.success(res, 'Post not created', {}, 400);
            }
            return Response.success(res, 'Post created successfully', post, 201);
        } catch (error) {
            next(error);
        }
    },
    all: async (req, res, next) => {
        try {
            const posts = await Post.find().populate('user_id');
            if (posts.length === 0) {
                return Response.success(res, 'No posts found', {}, 404);
            }
            return Response.success(res, 'Posts retrieved successfully', posts, 200);
        } catch (error) {
            next(error);
        }
    },
    show: async (req, res, next) => {
        try {
            const post = await Post.findById(req.params.id).populate('user_id');
            if (!post) {
                return Response.success(res, 'Post not found', {}, 404);
            }
            return Response.success(res, 'Post retrieved successfully', post, 200);
        } catch (error) {
            next(error);
        }
    },
    update: async (req, res, next) => {
        try {
            const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('user_id');
            if (!post) {
                return Response.success(res, 'Post not found', {}, 404);
            }
            return Response.success(res, 'Post updated successfully', post, 200);
        } catch (error) {
            next(error);
        }
    },
    delete: async (req, res, next) => {
        try {
            const post = await Post.findByIdAndDelete(req.params.id);
            if (!post) {
                return Response.success(res, 'Post not found', {}, 404);
            }
            return Response.success(res, 'Post deleted successfully', {}, 200);
        } catch (error) {
            next(error);
        }
    },
}

export default PostController;