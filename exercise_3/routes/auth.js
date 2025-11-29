import express from 'express';
import { login, register } from '../controllers/authController.js';
import { protect } from '../middlewares/auth.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// protect routes
router.get('/profile', protect, (req, res) => {
    res.json('protected route')
})

export default router;
 