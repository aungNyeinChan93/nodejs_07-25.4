import { Router } from 'express'
import UserConroller from '../controllers/userController.js';

const router = Router();

router.get('/', UserConroller.allUsers);
router.post('/', UserConroller.createUser);

// errors
router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send(err);
});

export default router;