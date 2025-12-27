import express from 'express'
const router = express.Router();
import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct, getTrandyProducts } from '../controllers/products.controller.js';
import { isAuthenticated, isAuthorized } from '../middleware/auth.middleware.js';

router.route('/products').get(getAllProducts);
router.route('/product/:id').get(getProductById);
router.route('/product/create').post(isAuthenticated, isAuthorized("admin"), createProduct);
router.route('/product/update/:id').put(isAuthenticated, isAuthorized("admin"), updateProduct);
router.route('/product/delete/:id').delete(isAuthenticated, isAuthorized("admin"), deleteProduct);
router.route('/products/trandy').get(getTrandyProducts);

export default router;