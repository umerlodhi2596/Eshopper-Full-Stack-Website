import express from 'express'
const router = express.Router();
import { getMe, loginUser, signUpUser, logoutUser } from '../controllers/user.controller.js';
import { isAuthenticated } from '../middleware/auth.middleware.js';


router.route('/signup').post(signUpUser);
router.route('/login').post(loginUser);
router.route('/me').get(isAuthenticated, getMe);
router.route('/logout').post(logoutUser)

export default router;