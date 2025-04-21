import { Router } from 'express';
import TestController from '../controllers/testController.js';

const router = Router();

router.get('/create', TestController.create);


// error handling middleware for 404 errors
router.use((err, req, res, next) => {
    res.status(404).json({
        errors: err,
    })
})


export default router;