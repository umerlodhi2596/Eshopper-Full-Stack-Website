import express from 'express';
const router = express.Router();
import { createCategory, deleteCategory, getAllCategories, getCategoryById } from '../controllers/category.controller.js';
import {isAuthenticated, isAuthorized} from '../middleware/auth.middleware.js'

router.route('/categories').get(getAllCategories);
router.route('/category/:id').get(getCategoryById);
router.route('/category/new').post(isAuthenticated, isAuthorized("admin"), createCategory);
router.route('/category/delete/:id').delete(isAuthenticated, isAuthorized("admin"), deleteCategory);


export default router;