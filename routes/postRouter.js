import { Router } from 'express';
import PostController from '../controllers/postController.js';

const router = Router();

router.route('/')
    .get(PostController.all)
    .post(PostController.create);

router.route('/:id')
    .get(PostController.show)
    .put(PostController.update)
    .delete(PostController.delete);

export default router;